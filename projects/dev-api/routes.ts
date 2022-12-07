import { mockedAppConfig, mockedLaunches, mockedSubscriptions } from '../space-api/mocks';
import { CustomRoute } from './custom-route';
import * as webpush from 'web-push';

export const routes: CustomRoute[] = [
  {
    path: '/app-config',
    method: 'get',
    handler: (req, res) => res.json(mockedAppConfig)
  },
  {
    path: '/launches/:id/details',
    method: 'post',
    handler: (req, res) => {
      const launch = mockedLaunches.find(l => l.id === +req.params['id']);
      if (!launch) { return res.status(404).json(null); }

      launch.details = req.body.details;
      return res.json(launch);
    }
  },
  {
    path: '/push-notification',
    method: 'get',
    handler: (req, res) => {
      const payload: {notification: NotificationOptions & { title: string }} = {
        notification: {
          title: req.query['title'] as string ?? 'Web Push Works!',
          body: req.query['body'] as string ?? 'Click to focus app',
          timestamp: Date.now(),
          vibrate: [100, 50, 100],
          actions: [
            {action: 'launches', title: 'Open Launches'},
            {action: 'labs', title: 'Open Labs'}
          ],
          data: {
            onActionClick: {
              default: {operation: 'focusLastFocusedOrOpen', url: ''},
              launches: {operation: 'openWindow', url: '/launches'},
              labs: {operation: 'openWindow', url: '/labs'}
            }
          }
        }
      };

      const payloadEncoded = JSON.stringify(payload);
      mockedSubscriptions.forEach(subscription =>
        webpush.sendNotification(subscription, payloadEncoded).catch(e => console.error(e))
      )

      return res.json(payload);
    }
  }
];
