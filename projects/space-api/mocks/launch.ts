import { Launch } from '../types';

export const mockedLaunches: Launch[] = [
  {
    missionPatch: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    id: 1,
    missionName: 'FalconSat',
    rocketName: 'Falcon 1',
    success: false,
    launchDate: '2006-03-24T22:30:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: 'Engine failure at 33 seconds and loss of vehicle',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
      presskitLink: null,
      articleLink: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/DemoSat'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
    id: 2,
    missionName: 'DemoSat',
    rocketName: 'Falcon 1',
    success: false,
    launchDate: '2007-03-21T01:10:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc',
      presskitLink: null,
      articleLink: 'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/DemoSat'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
    id: 3,
    missionName: 'Trailblazer',
    rocketName: 'Falcon 1',
    success: false,
    launchDate: '2008-08-03T03:34:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: 'Residual stage 1 thrust led to collision between stage 1 and stage 2',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=v0w9p3U8860',
      presskitLink: null,
      articleLink: 'http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Trailblazer_(satellite)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
    id: 4,
    missionName: 'RatSat',
    rocketName: 'Falcon 1',
    success: true,
    launchDate: '2008-09-28T23:15:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: 'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=dLQ2tZEH6G0',
      presskitLink: null,
      articleLink: 'https://en.wikipedia.org/wiki/Ratsat',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Ratsat'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png',
    id: 5,
    missionName: 'RazakSat',
    rocketName: 'Falcon 1',
    success: true,
    launchDate: '2009-07-13T03:35:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=yTaIDooc8Og',
      presskitLink: 'http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit',
      articleLink: 'http://www.spacex.com/news/2013/02/12/falcon-1-flight-5',
      wikipediaLink: 'https://en.wikipedia.org/wiki/RazakSAT'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png',
    id: 6,
    missionName: 'Falcon 9 Test Flight',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2010-06-04T18:45:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=nxSxgBKlYws',
      presskitLink: 'http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821',
      articleLink: 'http://www.spacex.com/news/2013/02/12/falcon-9-flight-1',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/d9/3e/FfrN88ry_o.png',
    id: 7,
    missionName: 'COTS 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2010-12-08T15:43:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=cdLITgWKe_0',
      presskitLink: 'http://www.spacex.com/files/downloads/cots1-20101206.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/fc/7a/r9ITwL12_o.png',
    id: 8,
    missionName: 'COTS 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2012-05-22T07:44:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Launch was scrubbed on first attempt, second launch attempt was successful',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=tpQzDbAY7yI',
      presskitLink: 'https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Dragon_C2%2B'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/0b/33/2eLGEejP_o.png',
    id: 9,
    missionName: 'CRS-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2012-10-08T00:35:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner\'s contractual right to decline a second ignition of the second stage under some conditions.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=-Vk3hiV_zXU',
      presskitLink: 'https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf',
      articleLink: 'https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-1'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/1b/b6/Z4oktZeR_o.png',
    id: 10,
    missionName: 'CRS-2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2013-03-01T19:10:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Last launch of the original Falcon 9 v1.0 launch vehicle',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ik0ElKl5kW4',
      presskitLink: 'https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/91/27/VhC1TTYN_o.png',
    id: 11,
    missionName: 'CASSIOPE',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2013-09-29T16:00:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=uFefasS6bhc',
      presskitLink: 'https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf',
      articleLink: 'http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/CASSIOPE'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/42/b0/vP0sk3d5_o.png',
    id: 12,
    missionName: 'SES-8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2013-12-03T22:41:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'First GTO launch for Falcon 9',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=aAj5xapImEs',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_ses-8launch_presskit.pdf',
      articleLink: 'https://www.nasaspaceflight.com/2013/12/spacex-falcon-9-v1-1-milestone-ses-8-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-8'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png',
    id: 13,
    missionName: 'Thaicom 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-01-06T18:06:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had "unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff"',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=AnSNRzMEmCU',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_thaicom6_presskit.pdf',
      articleLink: 'http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Thaicom_6'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png',
    id: 14,
    missionName: 'CRS-3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-04-18T19:25:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Od-lON4bTyQ',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf',
      articleLink: 'https://newatlas.com/crs-3-launch-spacex/31671/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-3'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a7/b4/bcMrHMey_o.png',
    id: 15,
    missionName: 'OG-2 Mission 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-07-14T15:15:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=lbHnSu-DLR4',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_presskit_final.pdf',
      articleLink: 'https://www.orbcomm.com/en/networks/satellite/orbcomm-og2',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Falcon_9_flight_10'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/bf/12/oSP2EwNz_o.png',
    id: 16,
    missionName: 'AsiaSat 8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-08-05T08:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=essrkMGlw5s',
      presskitLink: 'https://spaceflightnow.com/falcon9/011/presskit.pdf',
      articleLink: 'http://spacenews.com/41497spacex-launches-first-of-two-satellites-for-asiasat/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/AsiaSat_8'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/6f/c0/D3Owbmpo_o.png',
    id: 17,
    missionName: 'AsiaSat 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-09-07T05:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=39ninsyTRk8',
      presskitLink: 'https://www.spaceflightnow.com/falcon9/012/presskit.pdf',
      articleLink: 'https://www.space.com/27052-spacex-launches-asiasat6-satellite.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/AsiaSat_6'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/b4/28/cQwcs8qz_o.png',
    id: 18,
    missionName: 'CRS-4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-09-21T05:52:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7YkCh7uOw1Y',
      presskitLink: 'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-4_PressKit.pdf',
      articleLink: 'https://www.nasa.gov/press/2014/september/nasa-cargo-launches-to-space-station-aboard-spacex-resupply-mission-0',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-4'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/25/b6/RhNppyL3_o.png',
    id: 19,
    missionName: 'CRS-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-01-10T09:47:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket\'s descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=p7x-SumbynI',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_nasa_crs-5_presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2015/01/10/dragon-successfully-launched-rocket-recovery-demo-crash-lands/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-5'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/63/c5/0OIpD59z_o.png',
    id: 20,
    missionName: 'DSCOVR',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-02-11T23:03:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'First launch under USAF\'s OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=OvHJSIKP0Hg',
      presskitLink: 'http://www.spacex.com/press/2015/02/11/dscovr-launch-update',
      articleLink: 'https://spaceflightnow.com/2015/02/12/space-weather-observatory-blasts-off-after-17-year-wait/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Deep_Space_Climate_Observatory'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/20/10/sqPgZfej_o.png',
    id: 21,
    missionName: 'ABS-3A / Eutelsat 115W B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-03-02T03:50:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'The launch was Boeing\'s first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=mN7lyaCBzT8',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/abs-eutelsatfactsheet.pdf',
      articleLink: 'https://www.space.com/28702-spacex-rocket-launches-satellites-video.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/ABS-3A'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/3d/55/kbVulokl_o.png',
    id: 22,
    missionName: 'CRS-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-04-14T20:10:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Following the first-stage boost, SpaceX attempted a controlled-descent test of the first stage. The first stage contacted the ship, but soon tipped over due to excess lateral velocity caused by a stuck throttle valve resulting in a later-than-intended downthrottle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=csVpa25iqH0',
      presskitLink: 'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-6_PressKit.pdf',
      articleLink: 'https://spaceflightnow.com/2015/04/14/falcon-9-successfully-launches-descends-to-off-balance-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-6'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/c9/35/VNpbqUPb_o.png',
    id: 23,
    missionName: 'TürkmenÄlem 52°E / MonacoSAT',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-04-27T23:03:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=nBwAYT_ogj4',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacexthalesfactsheet_final.pdf',
      articleLink: 'https://spaceflightnow.com/2015/04/28/falcon-9-rocket-powers-into-space-with-satellite-for-turkmenistan/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/T%C3%BCrkmen%C3%84lem_52%C2%B0E_/_MonacoSAT'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/d0/22/gyTVYo21_o.png',
    id: 24,
    missionName: 'CRS-7',
    rocketName: 'Falcon 9',
    success: false,
    launchDate: '2015-06-28T14:21:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=PuNymhcTtSQ',
      presskitLink: 'https://www.nasa.gov/sites/default/files/atoms/files/spacex_nasa_crs-7_presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2015/06/28/falcon-9-rocket-destroyed-in-launch-mishap/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-7'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/89/e8/5eeThzqZ_o.png',
    id: 25,
    missionName: 'OG-2 Mission 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-12-22T01:29:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=O5bTbVbe4e4',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_press_kit_final2.pdf',
      articleLink: 'https://spaceflightnow.com/2015/12/22/round-trip-rocket-flight-gives-spacex-a-trifecta-of-successes/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Falcon_9_flight_20'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/72/f2/uK9vYzvk_o.png',
    id: 26,
    missionName: 'Jason 3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-01-17T15:42:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'First launch of NASA and NOAA joint science mission under the NLS II launch contract (not related to NASA CRS or USAF OSP3 contracts). Last launch of the original Falcon 9 v1.1 launch vehicle. The Jason-3 satellite was successfully deployed to target orbit. SpaceX again attempted a recovery of the first stage booster by landing on an autonomous drone ship; this time located in the Pacific Ocean. The first stage did achieve a soft-landing on the ship, but a lockout on one of the landing legs failed to latch, so that the booster fell over and exploded.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ivdKRJzl6y0',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_jason3_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2016/01/18/satellite-launched-to-measure-motions-of-the-oceans/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Jason-3'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/fa/ef/4FBvVReu_o.png',
    id: 27,
    missionName: 'SES-9',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-03-04T23:35:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Second launch of the enhanced Falcon 9 Full Thrust launch vehicle. Following the launch, SpaceX attempted an experimental landing test to a drone ship, although a successful landing was not expected because launch mass exceeded previously indicated limit for a GTO there was little fuel left. As predicted, booster recovery failed: the spent first stage "landed hard", but the controlled-descent, atmospheric re-entry and navigation to the drone ship were successful and returned significant test data on bringing back high-energy Falcon 9s.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=muDPSyO7-A0',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_ses9_press_kit_final.pdf',
      articleLink: 'https://spaceflightnow.com/2016/03/05/tv-broadcasting-satellite-finally-launched-on-falcon-9/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-9'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/49/2a/gkSR50yc_o.png',
    id: 28,
    missionName: 'CRS-8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-04-08T20:43:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Dragon carried over 1500 kg of supplies and delivered (stowed in its trunk) the inflatable Bigelow Expandable Activity Module (BEAM) to the ISS for two years of in-orbit tests. The rocket\'s first stage landed smoothly on SpaceX\'s autonomous spaceport drone ship 9 minutes after liftoff, making this the first ever successful landing of a rocket booster on a ship at sea as part of an orbital launch. The first stage B1021 was later also the first orbital booster to be used again, when launching SES-10 on March 30, 2017.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7pUAydjne5M',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_crs8_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2016/04/08/spacex-lands-rocket-on-floating-platform-after-station-resupply-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-8'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/87/c9/qViUTdt5_o.png',
    id: 29,
    missionName: 'JCSAT-2B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-05-06T05:21:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Launched the JCSAT 14 communications satellite for Tokyo-based SKY Perfect JSAT Corp. JCSAT 14 will support data networks, television broadcasters and mobile communications users in Japan, East Asia, Russia, Oceania, Hawaii and other Pacific islands. This was the first time a booster successfully landed after a GTO mission.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=L0bMeDj76ig',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_jcsat_press_kit_final.pdf',
      articleLink: 'https://spaceflightnow.com/2016/05/06/falcon-9-succeeds-in-middle-of-the-night-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/JCSAT-2B'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/d1/de/waYRCanq_o.png',
    id: 30,
    missionName: 'Thaicom 8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-05-27T21:39:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=zBYC4f79iXc',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/spacex_thaicom_8_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2016/05/27/spacex-logs-successful-late-afternoon-launch-for-thaicom/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Thaicom_8'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/ae/e9/VTH2y7S5_o.png',
    id: 31,
    missionName: 'ABS-2A / Eutelsat 117W B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-06-15T14:29:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=gLNmtUEvI5A',
      presskitLink: 'https://drive.google.com/open?id=0BwA3a65ef1OvMGpJSlpDNHhjelU',
      articleLink: 'https://spaceflightnow.com/2016/06/15/spacex-successfully-fires-satellites-into-orbit-but-loses-booster-on-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/ABS_(satellite_operator)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/b6/52/p5vdNEJF_o.png',
    id: 32,
    missionName: 'CRS-9',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-07-18T04:45:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Among other cargo, an International Docking Adapter (IDA-2) was carried to the ISS. This mission had a successful first-stage landing at Cape Canaveral.*Including the reusable Dragon Capsule, total payload to orbit was 6457 kg.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ThIdCuSsJh8',
      presskitLink: 'https://drive.google.com/open?id=0BwA3a65ef1OvM0JpSXdDUUJMRVk',
      articleLink: 'https://spaceflightnow.com/2016/07/18/spacex-sends-supplies-to-space-station-lands-another-falcon-rocket/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-9'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a4/21/eLkeQOl8_o.png',
    id: 33,
    missionName: 'JCSAT-16',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-08-14T05:26:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'First attempt to touch down from a ballistic trajectory using a single-engine landing burn. All previous landings from a ballistic trajectory had fired three engines on the landing-burn, which provided more braking force, but subjected the vehicle to greater structural stresses. The single-engine landing burn takes more time and fuel, but puts less stress on the vehicle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=QZTCEO0gvLo',
      presskitLink: 'https://drive.google.com/open?id=0BwA3a65ef1Ovb0FkYnE5dElZRlU',
      articleLink: 'https://spaceflightnow.com/2016/08/14/falcon-9-rocket-launches-japanese-satellite-then-nails-bullseye-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/JCSAT-16'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/54/7a/c5XLHIvL_o.png',
    id: 34,
    missionName: 'Amos-6',
    rocketName: 'Falcon 9',
    success: false,
    launchDate: '2016-09-01T13:07:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=_BgJEXQkjNQ',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2016/09/01/spacex-rocket-and-israeli-satellite-destroyed-in-launch-pad-explosion/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Amos-6'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a6/e8/5PyY296y_o.png',
    id: 35,
    missionName: 'Iridium NEXT Mission 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-01-14T17:54:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'Return-to-flight mission after the loss of Amos-6 in September 2016. Iridium NEXT will replace the original Iridium constellation, launched in the late 1990s. Each Falcon mission will carry 10 satellites, with a goal to complete deployment of the 66 plus 9 spare satellite constellation by mid 2018. The first two Iridium qualification units were supposed to ride a Dnepr rocket in April 2016 but were delayed, so Iridium decided to qualify the first batch of 10 satellites instead.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7WimRhydggo',
      presskitLink: 'https://drive.google.com/open?id=0BwA3a65ef1OvZC1aU3FuMlQzalE',
      articleLink: 'https://spaceflightnow.com/2017/01/14/spacex-resumes-flights-with-on-target-launch-for-iridium/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/d3/08/7YmXiSOQ_o.png',
    id: 36,
    missionName: 'CRS-10',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-02-19T14:39:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'First Falcon 9 flight from the historic LC-39A launchpad at Kennedy Space Center, carrying supplies and materials to support dozens of science and research investigations scheduled during ISS Expeditions 50 and 51. The first stage returned to launch site and landed at LZ-1.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=giNhaEzv_PI',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/crs10presskitfinal.pdf',
      articleLink: 'https://spaceflightnow.com/2017/02/19/historic-launch-pad-back-in-service-with-thundering-blastoff-by-spacex/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-10'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/54/f8/0X2hNhNK_o.png',
    id: 37,
    missionName: 'EchoStar 23',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-03-16T06:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Communications satellite for EchoStar Corp. EchoStar XXIII, based on a spare platform from the cancelled CMBStar 1 satellite program, will provide direct-to-home television broadcast services over Brazil. There was no attempt at a first-stage recovery so this rocket did not have landing legs or grid fins.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=lZmqbL-hz7U',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/echostarxxiiifinal.pdf',
      articleLink: 'http://spacenews.com/spacex-launches-echostar-23/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/EchoStar#Satellite_fleet'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/5b/10/dfj7yRG3_o.png',
    id: 38,
    missionName: 'SES-10',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-03-30T22:27:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=xsZSXav4wI8',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/finalses10presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/03/31/spacex-flies-rocket-for-second-time-in-historic-test-of-cost-cutting-technology/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-10'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/0d/06/aNPEVF72_o.png',
    id: 39,
    missionName: 'NROL-76',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-05-01T11:15:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'First launch under SpaceX\'s certification for national security space missions, which allows SpaceX to contract launch services for classified payloads. Second-stage speed and altitude telemetry were omitted from the launch webcast, which displayed first-stage telemetry instead, with continuous tracking of the booster from liftoff to landing for the first time.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=EzQpkQ1etdA',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/nrol76presskit.pdf',
      articleLink: 'https://techcrunch.com/2017/05/01/spacex-successfully-launches-nrol-76-u-s-military-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/List_of_NRO_launches'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/82/d6/SCoNa79H_o.png',
    id: 40,
    missionName: 'Inmarsat-5 F4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-05-15T23:21:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'At 6,070 kg this was the heaviest payload launched to GTO by a Falcon 9 rocket. The launch was originally scheduled for the Falcon Heavy, but performance improvements allowed the mission to be carried out by an expendable Falcon 9 instead.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ynMYE64IEKs',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/inmarsat5f4presskit_final.pdf',
      articleLink: 'https://www.space.com/36852-spacex-launches-inmarsat-5-f4-satellite.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Inmarsat#Satellites'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/e8/33/RV791zv9_o.png',
    id: 41,
    missionName: 'CRS-11',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-06-03T21:07:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'This mission delivered the Neutron Star Interior Composition Explorer (NICER) to the ISS, along with the MUSES Earth imaging platform and ROSA solar array. For the first time, this mission launched a refurbished Dragon capsule, serial number C106 which first flew in September 2014 on the CRS-4 mission. Originally scheduled to launch on June 1, but was scrubbed due to inclement weather.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=JuZBOUMsYws',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/crs11presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/06/03/reused-dragon-cargo-capsule-launched-on-journey-to-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-11'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/1b/40/Ouyy9Neh_o.png',
    id: 42,
    missionName: 'BulgariaSat-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-06-23T19:10:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Second time a booster will be reused: Second flight of B1029 after the Iridium mission of January 2017. The satellite will be the first commercial Bulgarian-owned communications satellite and it will provide television broadcasts and other communications services over southeast Europe.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Y8mLi-rRTh8',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/bulgariasat1presskit.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/BulgariaSat-1',
      wikipediaLink: 'https://en.wikipedia.org/wiki/BulgariaSat-1'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/cd/99/lNWjUnUS_o.png',
    id: 43,
    missionName: 'Iridium NEXT Mission 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-06-25T20:25:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'First flight with titanium grid fins to improve control authority and better cope with heat during re-entry.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7tIwZg8F9b8',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/iridium2presskit.pdf',
      articleLink: 'https://www.space.com/37304-liftoff-spacex-second-launch-three-days.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png',
    id: 44,
    missionName: 'Intelsat 35e',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-07-05T23:35:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Due to the constraints of sending a heavy satellite (~6,000 kg) to GTO, the rocket will fly in its expendable configuration and the first-stage booster will not be recovered.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=MIHVPCj25Z0',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/intelsat35epresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/07/06/spacex-delivers-for-intelsat-on-heavyweight-falcon-9-mission/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Intelsat_35e'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/4e/c6/M7X1WGKk_o.png',
    id: 45,
    missionName: 'CRS-12',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-08-14T16:31:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Dragon is expected to carry 2,349 kg (5,179 lb) of pressurized mass and 961 kg (2,119 lb) unpressurized. The external payload manifested for this flight is the CREAM cosmic-ray detector. First flight of the Falcon 9 Block 4 upgrade. Last flight of a newly-built Dragon capsule; further missions will use refurbished spacecraft.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=vLxWsYx8dbo',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/crs12presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/08/17/photos-falcon-9-rocket-soars-into-space-lands-back-at-cape-canaveral/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-12'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/f9/3a/3kH19hlj_o.png',
    id: 46,
    missionName: 'FormoSat-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-08-24T18:50:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'Formosat-5 is an Earth observation satellite of the Taiwanese space agency. The SHERPA space tug by Spaceflight Industries was removed from the cargo manifest of this mission. The satellite has a mass of only 475 kg.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=J4u3ZN2g_MI',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/formosat5presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/08/25/taiwanese-satellite-rides-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Formosat-5'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/bb/c2/CpO3VtI7_o.png',
    id: 47,
    missionName: 'Boeing X-37B OTV-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-09-07T13:50:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Notable because Boeing is the primary contractor of the X-37B, which has until now been launched by ULA, a SpaceX competitor and Boeing partnership. Second flight of the Falcon 9 Block 4 upgrade.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=9M6Zvi-fFv4',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/otv5_presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/09/07/spacex-beats-hurricane-with-smooth-launch-of-militarys-x-37b-spaceplane/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Boeing_X-37'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/1c/e0/lhGbeqkh_o.png',
    id: 48,
    missionName: 'Iridium NEXT Mission 3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-10-09T12:37:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'Third of eight missions to launch Iridium\'s second generation constellation from VAFB',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=SB4N4xF2B2w&feature=youtu.be',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/iridium3presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/10/09/spacex-launch-adds-another-10-satellites-to-iridium-next-fleet/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/e3/b5/UEzC560l_o.png',
    id: 49,
    missionName: 'SES-11 / Echostar 105',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-10-11T22:53:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Nineteenth comsat to GTO, also the fourth satellite launched for SES and second for Echostar. Third time a first stage booster will be reused.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=iv1zeGSvhIw',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/echostar105ses11presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/10/12/video-falcon-9-rocket-lifts-off-with-joint-satellite-for-ses-echostar/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/List_of_SES_satellites'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/02/51/7NLaBm8c_o.png',
    id: 50,
    missionName: 'KoreaSat 5A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-10-30T19:34:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'KoreaSat 5A is a Ku-band satellite capable of providing communication services from East Africa and Central Asia to southern India, Southeast Asia, the Philippines, Guam, Korea, and Japan. The satellite will be placed in GEO at 113Â° East Longitude, and will provide services ranging from broadband internet to broadcasting services and maritime communications.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=RUjH14vhLxA',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/koreasat5apresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/10/30/spacex-launches-and-lands-third-rocket-in-three-weeks/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Koreasat_5A'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/ea/12/8vVzlOeL_o.png',
    id: 51,
    missionName: 'CRS-13',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-12-15T15:36:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Will reuse the Dragon capsule previously flown on CRS-6 and will reuse the booster from CRS-11.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=OPHbqY9LHCs',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/crs13presskit12_11.pdf',
      articleLink: 'https://spaceflightnow.com/2017/12/15/spacexs-50th-falcon-rocket-launch-kicks-off-station-resupply-mission/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-13'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/cb/4b/n6GTX4PI_o.png',
    id: 52,
    missionName: 'Iridium NEXT Mission 4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-12-23T01:27:23.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'Reusing the booster first used on Iridium-2, but will be flying expendable.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=wtdjCwo6d3Q',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/iridium4presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2017/12/23/spacex-launch-dazzles-delivering-10-more-satellites-for-iridium/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/e8/30/yMNPvCci_o.png',
    id: 53,
    missionName: 'ZUMA',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-01-08T01:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Originally planned for mid-November 2017, the mission was delayed due to test results from the fairing of another customer. First-stage booster will attempt landing at LZ-1',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=0PWu3BRxn60',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/zumapresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/01/08/spacex-kicks-off-ambitious-2018-schedule-with-launch-for-u-s-government/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Zuma_(satellite)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/95/ec/FoFpPft0_o.png',
    id: 54,
    missionName: 'SES-16 / GovSat-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-01-31T21:25:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Reused booster from the classified NROL-76 mission in May 2017. Following a successful experimental ocean landing that used three engines, the booster unexpectedly remained intact; Elon Musk stated in a tweet that SpaceX will attempt to tow the booster to shore.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ScYUA51-POQ',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/govsat1presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/01/31/spacex-rocket-flies-on-60th-anniversary-of-first-u-s-satellite-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/List_of_SES_satellites#SES_Fleet'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/22/5f/jAAULKc3_o.png',
    id: 55,
    missionName: 'Falcon Heavy Test Flight',
    rocketName: 'Falcon Heavy',
    success: true,
    launchDate: '2018-02-06T20:45:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed. Final burn to heliocentric mars-earth orbit was successful after the second stage and payload passed through the Van Allen belts.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=wbSwFU6tY1c',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/falconheavypresskit_v1.pdf',
      articleLink: 'https://spaceflightnow.com/2018/02/07/spacex-debuts-worlds-most-powerful-rocket-sends-tesla-toward-the-asteroid-belt/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/f9/05/I9duWQ6v_o.png',
    id: 56,
    missionName: 'Paz / Starlink Demo',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-02-22T14:17:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=-p-PToD2URA',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/paz_press_kit_2.21.pdf',
      articleLink: 'https://spaceflightnow.com/2018/02/22/recycled-spacex-rocket-boosts-paz-radar-satellite-first-starlink-testbeds-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Paz_(satellite)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/87/5d/ZDr6l98A_o.png',
    id: 57,
    missionName: 'Hispasat 30W-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-03-06T05:33:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Launched with landing legs and titanium grid fins. Did not attempt a landing due to \'unfavorable weather conditions in the recovery area\'.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Kpfrp-GMKKM',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/hispasat30w6_presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/03/06/hefty-hispasat-satellite-rides-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Hispasat_30W-6'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/2f/36/Bn1RX3aO_o.png',
    id: 58,
    missionName: 'Iridium NEXT Mission 5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-03-30T14:13:51.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'Fifth Iridium NEXT mission to deploy ten Iridium NEXT satellites. Reused booster from third Iridium flight, and although controlled descent was performed, the booster was expended into the ocean. SpaceX planned a second recovery attempt of one half of the fairing using the specially modified boat Mr. Steven. However, the fairing\'s parafoil twisted during the recovery, which led to water impact at high speed',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=mp0TW8vkCLg',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/iridium-5_press_kit_2018.pdf',
      articleLink: 'https://spaceflightnow.com/2018/03/30/iridium-messaging-network-gets-another-boost-from-spacex/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/e7/bf/WzMju1cP_o.png',
    id: 59,
    missionName: 'CRS-14',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-04-02T20:30:41.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'The launch used a refurbished booster (from CRS-12) for the 11th time, and a refurbished capsule (C110 from CRS-8) for the third time. External payloads include a materials research platform MISSE-FF phase 3 of the Robotic Refueling Mission TSIS, heliophysics sensor several crystallization experiments, and the RemoveDebris spacecraft aimed at space junk removal. The booster was expended in order to test a new landing profile.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=BPQHG-LevZM',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/crs-14presskit2018.pdf',
      articleLink: 'https://spaceflightnow.com/2018/04/02/spacex-supply-ship-departs-cape-canaveral-for-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-14'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/ca/54/EEGqRRto_o.png',
    id: 60,
    missionName: 'TESS',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-04-18T22:51:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite\'s own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA\'s Launch Services Program Category 2 certification of its Falcon 9 \'Full Thrust\', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=aY-0uBIYYKk',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/tesspresskitfinal417.pdf',
      articleLink: 'https://spaceflightnow.com/2018/04/19/all-sky-surveyor-launched-from-cape-canaveral-on-the-hunt-for-exoplanets/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Transiting_Exoplanet_Survey_Satellite'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/94/3a/eavaQRYD_o.png',
    id: 61,
    missionName: 'Bangabandhu-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-05-11T20:14:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'First launch of a Block V first stage.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=rQEqKZ7CJlk',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/bangabandhupresskit51118.pdf',
      articleLink: 'https://spaceflightnow.com/2018/05/11/spacex-debuts-an-improved-human-rated-model-of-the-falcon-9-rocket/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Bangabandhu-1'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/f5/da/hz3r2Lni_o.png',
    id: 62,
    missionName: 'Iridium NEXT Mission 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-05-22T19:47:58.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'GFZ arranged a rideshare of GRACE-FO on a Falcon 9 with Iridium following the cancellation of their Dnepr launch contract in 2015. Iridium CEO Matt Desch disclosed in September 2017 that GRACE-FO would be launched on the sixth Iridium NEXT mission. The booster reuse turnaround was a record 4.5 months between flights.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=I_0GgKfwCSk',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/iridium6presskit2018521.pdf',
      articleLink: 'https://spaceflightnow.com/2018/05/22/rideshare-launch-by-spacex-serves-commercial-and-scientific-customers/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Gravity_Recovery_and_Climate_Experiment'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/4b/b9/oS8ezl6V_o.png',
    id: 63,
    missionName: 'SES-12',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-06-04T04:45:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SES-12, the replacement satellite for NSS-6, was successfully launched and deployed on June 4th, completing SpaceX\'s eleventh flight of 2018. According to SES Luxembourg, The SES-12 satellite will expand SES’s capabilities to provide direct-to-home (DTH) broadcasting, VSAT, Mobility and High Throughput Satellite (HTS) data connectivity services in the Middle East and the Asia-Pacific region, including rapidly growing markets such as India and Indonesia. [SES-12] will be co-located with SES-8',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=2hcM5hqQ45s',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/ses-12missionpress_kit_6.2.18.pdf',
      articleLink: 'https://spaceflightnow.com/2018/06/04/multi-mission-telecom-craft-launched-by-spacex-for-ses/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-12'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/11/ec/xng5hAXN_o.png',
    id: 64,
    missionName: 'CRS-15',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-06-29T09:42:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'Payload included MISSE-FF 2, ECOSTRESS, and a Latching End Effector. The refurbished booster featured a record 2.5 months period turnaround from its original launch of the TESS satellite — the fastest previous was 4.5 months. This was the last commercial flight of a Block 4 booster, which was expended into the Atlantic without landing legs and grid fins.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ycMagB1s8XM',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/crs15presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/06/29/spacex-launches-ai-enabled-robot-companion-vegetation-monitor-to-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-15'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/12/7c/NiniYxoh_o.png',
    id: 65,
    missionName: 'Telstar 19V',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-07-22T05:50:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SSL-manufactured communications satellite intended to be placed at 63° West over the Americas. At 7,075 kg, it became the heaviest commercial communications satellite ever launched.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=xybp6zLaGx4',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/telstar19vantagepresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/07/22/spacex-delivers-for-telesat-with-successful-early-morning-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Telstar_19V'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/37/63/NE4EISfK_o.png',
    id: 66,
    missionName: 'Iridium NEXT Mission 7',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-07-25T11:39:26.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'SpaceX\'s fourteenth flight of 2018 and seventh of eight launches in a half-a-billion-dollar contract with Iridium. Will use a Block 5 first stage, to be recovered in the Pacific Ocean. Only one mission will be left for Iridium, with 10 more satellites. First attempt to recover a Fairing with the upgraded net. Fairing recovery was not successful.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=vsDknmK30C0',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/iridium7_press_kit_7_24.pdf',
      articleLink: 'https://spaceflightnow.com/2018/07/25/spacexs-second-launch-in-three-days-lofts-10-more-iridium-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a7/ec/sbwePzVD_o.png',
    id: 67,
    missionName: 'Merah Putih',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-08-07T05:18:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s fifteenth flight of 2018 launched the Merah Putih (also known as Telkom-4) geostationary communications satellite for Telkom Indonesia. It marked the first reuse of any Block 5 first stage; the booster B1046 had previously launched Bangabandhu-1. The stage was recovered and is expected to become the first Falcon 9 booster to fly three missions.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=FjfQNBYv2IY',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/merahputihpresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/08/07/indonesian-communications-satellite-deployed-in-orbit-by-spacex/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Telkom_Indonesia'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/2d/d2/jStsqeLC_o.png',
    id: 68,
    missionName: 'Telstar 18V',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-09-10T04:45:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s sixteenth flight of 2018 launched the Telstar 18v GEO communication satellite for Telesat, the second launch for the canadian company in a few months. The first stage was a new Falcon 9 V1.2 Block 5 which was successfully recovered on OCISLY.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Apw3xqwsG1U',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/telstar18vantagepresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/09/10/spacex-telesat-achieve-repeat-success-with-midnight-hour-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Telstar_18V'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/ae/11/H85gskPQ_o.png',
    id: 69,
    missionName: 'SAOCOM 1A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-10-08T02:22:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'SpaceX\'s seventeenth flight of 2018 was the first launch of the Saocom Earth observation satellite constellation of the Argentine Space Agency CONAE. The second launch of Saocom 1B will happen in 2019. This flight marked the first RTLS launch out of Vandenberg, with a landing on the concrete pad at SLC-4W, very close to the launch pad.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=vr_C6LQ7mHc',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/saocom1apresskit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/10/08/spacex-aces-first-rocket-landing-in-california-after-launching-argentine-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SAOCOM'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/a3/96/WvJsBXuE_o.png',
    id: 70,
    missionName: 'Es’hail 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-11-15T20:46:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'SpaceX\'s eighteenth flight of 2018 was its first for Es\'hailSat. Es\'hail-2 is a communications satellite delivering television and internet to Qatar and the surrounding region. It was launched into a geostationary transfer orbit from LC-39A at Kennedy Space Center. The booster landed on OCISLY.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=PhTbzc-BqKs&feature=youtu.be',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/eshail-2_mission_press_kit_11_14_2018.pdf',
      articleLink: 'https://spaceflightnow.com/2018/11/15/spacex-launches-qatars-eshail-2-communications-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Es%27hailSat'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/07/ff/s2SD7HuJ_o.png',
    id: 71,
    missionName: 'SSO-A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-12-03T18:34:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'SpaceX\'s nineteenth flight of 2018 will fly SSO-A: SmallSat Express out of Vandenberg SLC-4E for Spaceflight. SSO-A is a rideshare to sun synchronus low earth orbit consisting of 64 individual microsatellites and cubesats. It is also likely to be the third flight of core B1046 which previously flew Bangabandhu-1 and Merah Putih. If this happens it will be the first time a Falcon 9 has flown more than two missions. ',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Wq8kS6UoOrQ',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/ssoa_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/12/03/spacex-launches-swarm-of-satellites-re-flies-rocket-for-third-time/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Spaceflight_Industries'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/de/47/liJzNMRP_o.png',
    id: 72,
    missionName: 'CRS-16',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-12-05T18:16:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s 16th Crew Resupply Mission on behalf of NASA, with a total of 20 contracted flights. This will bring essential supplies to the International Space Station using SpaceX\'s reusable Dragon spacecraft. The Falcon 9 will launch from SLC-40 at Cape Canaveral Air Force Station. During the landing of the first stage, a grid fin hydraulic pump stalled, causing the core to enter an uncontrolled roll, and resulting in a (succesful) water landing.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Esh1jHT9oTA',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/crs16_press_kit_12_4.pdf',
      articleLink: 'https://spaceflightnow.com/2018/12/05/spacex-falcon-9-boosts-dragon-cargo-ship-to-orbit-first-stage-misses-landing-target/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-16'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/b3/24/vKUtLIu9_o.png',
    id: 73,
    missionName: 'GPS III SV01',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-12-23T13:51:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s twenty-first flight of 2018 launched the first of the new GPS III satellites (Block IIIA) for the United States Air Force and was SpaceX\'s first EELV mission. The spacecraft was delivered to a MEO transfer orbit from SLC-40 at Cape Canaveral Air Force Station. This mission was the first to fly with the redesigned COPV on the first stage (B1054) as well as the second. The booster was expended.',
    links: {
      videoLink: 'https://youtu.be/yRiLPoy_Mzc',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/gps_iii_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2018/12/23/spacex-closes-out-year-with-successful-gps-satellite-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/GPS_Block_IIIA'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/11/f0/xPDcIpmS_o.png',
    id: 74,
    missionName: 'Iridium NEXT Mission 8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-01-11T15:31:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'SpaceX\'s first flight of 2019 will be the eighth and final launch of its planned Iridium flights. Delivering 10 satellites to low earth orbit, this brings the total up to 75 and completes the Iridium NEXT constellation. This mission launches from SLC-4E at Vandenberg AFB. The booster is expected to land on JRTI.',
    links: {
      videoLink: 'https://youtu.be/VshdafZvwrg',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/iridium8presskit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/01/11/spacex-begins-2019-with-eighth-and-final-for-upgraded-iridium-network/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/50/65/wAkWv7k7_o.png',
    id: 75,
    missionName: 'Nusantara Satu (PSN-6) / S5 / Beresheet',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-02-22T01:45:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX will launch this rideshare to GTO for Space Systems Loral (SSL). The primary payload for this mission is Nusantara Satu, a communications satellite built by SSL for the private Indonesian company PT Pasifik Satelit Nusantara (PSN). Spaceflight Industries\' GTO-1 mission consists of two secondary payloads. One of those is Beresheet, the lunar lander built by the Israeli non-profit organization, SpaceIL. Beresheet will make its own way to the moon from GTO. The other secondary is Air Force Research Lab\'s (Space Situational Awareness) S5 mission, which hitches a ride to GEO aboard Nusantara Satu. This mission launches from SLC-40 at Cape Canaveral AFS. The booster is expected to land on OCISLY.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=XS0E35aYJcU',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/nusantara_satu_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/02/22/israeli-moon-lander-hitches-ride-on-spacex-launch-with-indonesian-comsat/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/PT_Pasifik_Satelit_Nusantara'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/be/7e/gOkzvXPe_o.png',
    id: 76,
    missionName: 'CCtCap Demo Mission 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-03-02T07:45:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Demonstration Mission 1 (DM-1) will launch Dragon 2 as part of NASA\'s Commercial Crew Transportation Capability program. This mission will demonstrate Dragon 2, and Falcon 9 in its configuration for crewed missions. DM-1 will launch from LC-39A at Kennedy Space Center, likely carrying some cargo to the International Space Station. The booster is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/2ZL0tbOZYhE',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/crew_demo-1_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/03/02/spacex-launches-first-crew-dragon-ferry-ship/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpX-DM1'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/ab/ad/YJDi2l1n_o.png',
    id: 77,
    missionName: 'ArabSat 6A',
    rocketName: 'Falcon Heavy',
    success: true,
    launchDate: '2019-04-11T22:35:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'SpaceX will launch Arabsat 6A to a geostationary transfer orbit from SLC-39A, KSC. The satellite is a geostationary telecommunications satellite built by Lockheed Martin for the Saudi Arabian company Arabsat. This will be the first operational flight of Falcon Heavy, and also the first Block 5 Falcon Heavy. All three cores will be new Block 5 cores. The side cores are expected to land at LZ-1 and LZ-2, and the center core is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/TXMGu2d8c8g',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/arabsat-6a_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/04/11/spacexs-falcon-heavy-successful-in-commercial-debut/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Arabsat-6A'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/fc/58/9UErD3ut_o.png',
    id: 78,
    missionName: 'CRS-17',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-05-04T06:48:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s 17th Commercial Resupply Services mission for NASA out of a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX\'s reusable Dragon 1 spacecraft. The external payloads for this mission include Orbital Carbon Observatory 3 and Space Test Program-Houston 6. The Falcon 9 launches from SLC-40 at Cape Canaveral AFS. The booster was expected to land at LZ-1, however, due to the ongoing investigation and clean-up following the Crew Dragon testing incident, it is likely to land on OCISLY instead.\n    ',
    links: {
      videoLink: 'https://youtu.be/AQFhX5TvP0M',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/crs-17_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/05/04/spacex-launches-space-station-resupply-mission-lands-rocket-on-drone-ship/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-17'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/7e/27/MGYJy1JY_o.png',
    id: 79,
    missionName: 'Starlink v0.9',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-05-24T02:30:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX will launch dozens of Starlink demonstration satellites from SLC-40, Cape Canaveral AFS. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. Two prototype satellites, Microsats 2a and 2b, were launched from Vandenberg AFB in February 2018. The booster for this mission will land on OCISLY.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=riBaVeDTEWI',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/starlink_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/05/24/spacexs-first-60-starlink-broadband-satellites-deployed-in-orbit',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink_(satellite_constellation)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/4e/dd/qsIUVh1j_o.png',
    id: 80,
    missionName: 'RADARSAT Constellation',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-06-12T14:17:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: 'SpaceX is launching the three satellite RADARSAT Constellation Mission into Sun Synchronous orbit from SLC-4E, VAFB. The RCM spacecraft are synthetic aperture radar (SAR) Earth observation satellites built by the Canadian space company, MDA, for the Canadian Space Agency. This mission was delayed when the originally slated booster failed to land after CRS-16. The booster is expected to return to LZ-4.',
    links: {
      videoLink: 'https://youtu.be/8A2nJd9Urk8',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/radarsat_constellation_mission_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/06/12/three-canadian-radar-surveillance-satellites-ride-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/RADARSAT_Constellation'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/b0/23/BvwaqoS0_o.png',
    id: 81,
    missionName: 'STP-2',
    rocketName: 'Falcon Heavy',
    success: true,
    launchDate: '2019-06-25T03:30:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'Space Test Program 2 is a rideshare managed by the U.S. Air Force Space and Missile Systems Center (SMC), launching from LC-39A, KSC. Most of the spacecraft will be delivered into low Earth orbit (LEO) in two deployment sequences separated by a second stage burn. These LEO payloads include the six Taiwan and United States owned COSMIC-2 microsatellites, the Planetary Society\'s LightSail-B demonstrator cubesat, and others. The third and final deployment will be the Air Force Research Lab\'s DSX spacecraft, which will be delivered to a medium Earth orbit (MEO). This mission will reuse the side cores from Arabsat 6A, which will return to LZ-1, and LZ-2. The new center core will boost back to land on OCISLY less than 40 km from the launch site.',
    links: {
      videoLink: 'https://youtu.be/WxH4CAlhtiQ',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/stp-2_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/06/25/falcon-heavy-launches-on-military-led-rideshare-mission-boat-catches-fairing',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Space_Test_Program'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/89/54/61VCHZwd_o.png',
    id: 82,
    missionName: 'CRS-18',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-07-25T22:01:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s 18th Commercial Resupply Services mission out of a total of 20 such contracted flights for NASA, this launch will deliver essential supplies to the International Space Station using the reusable Dragon 1 cargo spacecraft. The external payload for this mission is International Docking Adapter 3, replacing IDA-1 lost in SpaceX\'s CRS-7 launch failure. This mission will launch from SLC-40 at Cape Canaveral AFS on a Falcon 9, and the first-stage booster is expected to land back at CCAFS LZ-1.',
    links: {
      videoLink: 'https://youtu.be/SlgrxVuP5jk',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/crs-18_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/07/25/new-docking-port-spacesuit-and-supplies-en-route-to-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-18'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/f1/4a/WAkSmKfY_o.png',
    id: 83,
    missionName: 'Amos-17',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-08-06T22:52:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX will launch Boeing built Amos-17, a geostationary communications satellite for Israeli company Spacecom. The satellite will be delivered to GTO from KSC LC-39A or possibly CCAFS SLC-40, and will replace the defunct Amos-5 at 17° E. Amos-17 carries multi-band high throughput and regional beams servicing Africa, Europe and the Middle East. The cost of this launch is covered for Spacecom by SpaceX credit following the Amos-6 incident. A recovery of the booster for this mission is not expected.',
    links: {
      videoLink: 'https://youtu.be/fZh82-WcCuo',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/amos-17_mission_press_kit_8_6_2019.pdf',
      articleLink: 'https://spaceflightnow.com/2019/08/07/spacex-launches-israeli-owned-telecom-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Spacecom'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 84,
    missionName: 'Starlink 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-11-11T14:56:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the first batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. They are expected to contribute to the 550 km x 53° shell. It is the second Starlink launch overall. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/pIDuv0Ta0XQ',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/starlink_press_kit_nov2019.pdf',
      articleLink: 'https://spaceflightnow.com/2019/11/11/successful-launch-continues-deployment-of-spacexs-starlink-network',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink_(satellite_constellation)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/05/f9/FQWx8g9k_o.png',
    id: 85,
    missionName: 'CRS-19',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-12-05T17:29:23.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s 19th Crew Resupply Mission on behalf of NASA with a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX\'s reusable Dragon spacecraft. The external payloads for this mission include the Hyperspectral Imager Suite and a lithium-ion battery. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral AFS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.',
    links: {
      videoLink: 'https://youtu.be/-aoAGdYXp_4',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/crs-19_mission_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/12/05/dragon-soars-on-research-and-resupply-flight-to-international-space-station',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-19'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/3c/e7/PotxLenG_o.png',
    id: 86,
    missionName: 'JCSat 18 / Kacific 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-12-17T00:10:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX will launch the Boeing built dual payload satellite to geostationary transfer orbit from XXXX. JCSat 18 is a mobile broadband communications payload built for Sky Perfect JSAT Corporation of Japan and will service Asia Pacific. Kacific 1 is a high throughput broadband internet payload built for Kacific Broadband Satellites and will service certain high demand areas of Southeast Asia and the Pacific. Both payloads share a single chassis. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/sbXgZg9JmkI',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/jcsat18kacific1_mission_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2019/12/17/startup-launches-broadband-satellite-on-spacex-rocket-to-connect-pacific-islands',
      wikipediaLink: 'https://en.wikipedia.org/wiki/JSAT_(satellite_constellation)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 87,
    missionName: 'Starlink 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-01-07T02:19:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the second batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. They are expected to contribute to the 550 km x 53° shell. It is the third Starlink launch overall. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/HwyXo6T7jC4',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/starlink_press_kit_jan2020.pdf',
      articleLink: 'https://spaceflightnow.com/2020/01/07/spacex-launches-more-starlink-satellites-tests-design-change-for-astronomers',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink_(satellite_constellation)'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/4f/d2/kTjuhrb0_o.png',
    id: 88,
    missionName: 'Crew Dragon In Flight Abort Test',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-01-19T14:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'SpaceX will launch a Crew Dragon capsule from LC-39A, KSC on a fully fueled Falcon 9 rocket and then trigger the launch escape system during the period of maximum dynamic pressure. As part of NASA\'a Commercial Crew Integrated Capability program (CCiCap) this test will contribute valuable data to help validate Crew Dragon and its launch abort system. The Crew Dragon will be recovered by GO Searcher after splashdown in the Atlantic Ocean. This flight does not go to orbit. The booster and upper stage are expected to break up following capsule separation and there will be no landing attempt.',
    links: {
      videoLink: 'https://youtu.be/mhrkdHshb3E',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/in-flight_abort_test_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2020/01/19/spacex-aces-final-major-test-before-first-crew-mission',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Commercial_Crew_Development'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 89,
    missionName: 'Starlink 3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-01-29T14:06:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the third batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fourth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/1KmBDCiL7MU',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/starlink_press_kit_jan272020.pdf',
      articleLink: 'https://spaceflightnow.com/2020/01/29/spacex-boosts-60-more-starlink-satellites-into-orbit-after-weather-delays/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Starlink'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 90,
    missionName: 'Starlink 4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-02-17T15:05:55.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the fourth batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fifth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/8xeX62mLcf8',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/fifth_starlink_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2020/02/17/spacex-delivers-more-starlink-satellites-to-orbit-booster-misses-drone-ship-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Starlink'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/53/22/dh0XSLXO_o.png',
    id: 91,
    missionName: 'CRS-20',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-03-07T04:50:31.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX\'s reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.',
    links: {
      videoLink: 'https://youtu.be/1MkcWK2PnsU',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/crs-20_mission_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 92,
    missionName: 'Starlink 5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-03-18T12:16:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'The sixth Starlink launch overall and the fifth operational batch of Starlink satellites will launch into orbit aboard a Falcon 9 rocket. This mission is expected to deploy all sixty satellites into an elliptical orbit about fifteen minutes into flight. In the weeks following launch the satellites are expected to utilize their onboard ion thrusters to raise their orbits to 550 km in three groups of 20, making use of precession rates to separate themselves into three planes. The booster will land on a drone ship approximately 628 km downrange.',
    links: {
      videoLink: 'https://youtu.be/I4sMhHbHYXM',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/sixth_starlink_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2020/03/18/falcon-9-rocket-overcomes-engine-failure-to-deploy-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 93,
    missionName: 'Starlink 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-04-22T19:30:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'This mission will launch the sixth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the seventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/wSge0I7pwFI',
      presskitLink: 'https://www.spacex.com/sites/spacex/files/seventh_starlink_mission_overview.pdf',
      articleLink: 'https://spaceflightnow.com/2020/04/22/spacexs-starlink-network-surpasses-400-satellite-mark-after-successful-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png',
    id: 94,
    missionName: 'CCtCap Demo Mission 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-05-30T19:22:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA\'s Commercial Crew Transportation Capability Program (CCtCap), carryingNASA astronauts Doug Hurley and Bob Behnken to the International Space Station. This mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon\'s ability to safely transport crew to and from the space station. The booster for this mission will land on OCISLY. The mission will be complete with the safe return the Dragon capsule and astronauts.',
    links: {
      videoLink: 'https://youtu.be/xY96v0OIcK4',
      presskitLink: 'https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf',
      articleLink: 'https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 95,
    missionName: 'Starlink 7',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-06-04T01:25:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the seventh batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the eighth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI on its first mission since arriving at Port Canaveral.',
    links: {
      videoLink: 'https://youtu.be/y4xBFHjkUvw',
      presskitLink: 'https://spacextimemachine.com/assets/press_kits/185.pdf',
      articleLink: null,
      wikipediaLink: null
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 96,
    missionName: 'Starlink-8 & SkySat 16-18',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-06-13T09:21:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the eighth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the ninth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is expected to include rideshare payloads, SkySats 16-18, on top of the Starlink stack. The booster for this mission is expected to land an ASDS.',
    links: {
      videoLink: 'https://youtu.be/8riKQXChPGg',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2020/06/13/starlink-satellite-deployments-continue-with-successful-falcon-9-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink'
    }
  }, {
    missionPatch: null,
    id: 97,
    missionName: 'GPS III SV03 (Columbus)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-06-30T19:55:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX launches GPS Block III Space Vehicle 03 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This is the third GPS III satellite and the second launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/6zr0nfG3Xy4',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2020/06/30/spacex-launches-its-first-mission-for-u-s-space-force/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/GPS_Block_III'
    }
  }, {
    missionPatch: null,
    id: 98,
    missionName: 'ANASIS-II',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-07-20T21:30:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX will launch ANASIS-II, a South Korean geostationary military communication satellite from LC-39A, Kennedy Space Center. It will be South Korea\'s first dedicated military communications satellite. Falcon 9 will deliver the satellite to a geostationary transfer orbit. The booster is expected to land downrange on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/TshvZlQ7le8',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2020/07/20/spacex-delivers-south-koreas-first-military-satellite-into-on-target-orbit/',
      wikipediaLink: null
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 99,
    missionName: 'Starlink-9 (v1.0) & BlackSky Global 5-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-08-07T05:12:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'This mission will launch the ninth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the tenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes a rideshare of two BlackSky satellites on top of the Starlink stack. The booster for this mission is expected to land an ASDS.',
    links: {
      videoLink: 'https://youtu.be/KU6KogxG5BE',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2020/08/07/spacex-closes-out-busy-week-with-launch-of-more-starlink-satellites',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 100,
    missionName: 'Starlink-10 (v1.0) & SkySat 19-21',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-08-18T14:31:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'This mission will launch the tenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the eleventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 19-21, on top of the Starlink stack. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/jTMJK7wb0rM',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink'
    }
  }, {
    missionPatch: 'https://i.imgur.com/CFZLKzV.png',
    id: 101,
    missionName: 'SAOCOM 1B, GNOMES-1, Tyvak-0172',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-08-30T23:18:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX\'s Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun-synchronous polar orbit from SLC-40, Cape Canaveral AFS. SAOCOM 1B is a synthetic aperture radar Earth observation satellite to support disaster management. The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP. This mission is also expected to include rideshare payloads Sequoia, and GNOMES-1. This will be the first polar launch from the Space Coast in 60 years. The launch azimuth will be southward and the booster will land at LZ-1.',
    links: {
      videoLink: 'https://youtu.be/P-gLOsDjE3E',
      presskitLink: null,
      articleLink: 'https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SAOCOM'
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 102,
    missionName: 'Starlink-11 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-09-03T12:46:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'The 11th operational batch of Starlink satellites (12th overall) will lift off from LC-39A at Kennedy Space Center, Florida on a Falcon 9 rocket. In the weeks following deployment the Starlink satellites will use onboard ion thrusters to reach their operational altitude of 550 km. This is the third batch of Starlink satellites which all feature visors intended to reduce their visibility from Earth. Falcon 9\'s first stage will attempt to land on a drone ship approximately 628 km downrange, its sixth landing overall, and a ships is in place to attempt the recovery of both payload fairing halves.',
    links: {
      videoLink: 'https://youtu.be/_j4xR7LMCGY',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null
    }
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 103,
    missionName: 'Starlink-12 (v1.0)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-09-17T18:17:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'This mission will launch the twelfth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral Air Force Station. It is the thirteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.',
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 104,
    missionName: 'Starlink-13 (v1.0)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-09-01T00:00:00.000Z',
    launchSiteName: null,
    details: 'This mission will launch the thirteenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the fourteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.',
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 105,
    missionName: 'GPS III SV04',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-10-01T00:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: 'SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.',
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
    id: 106,
    missionName: 'Starlink-14 (v1.0)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-10-01T00:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 107,
    missionName: 'Crew-1',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-10-23T09:47:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 108,
    missionName: 'Sentinel-6 Michael Freilich',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-11-10T19:45:00.000Z',
    launchSiteName: 'Vandenberg Air Force Base Space Launch Complex 4E',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 109,
    missionName: 'CRS-21',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-11-15T00:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 110,
    missionName: 'SXM-7',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-10-01T00:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 111,
    missionName: 'Turksat 5A',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2020-10-01T00:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }, {
    missionPatch: null,
    id: 114,
    missionName: 'GPS III SV05',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2021-01-01T00:00:00.000Z',
    launchSiteName: 'Cape Canaveral Air Force Station Space Launch Complex 40',
    details: null,
    links: {videoLink: null, presskitLink: null, articleLink: null, wikipediaLink: null}
  }
]
