import { mockedMoons } from 'space-api/mocks';
import { MoonsService } from 'space-api/services';
import { MoonNamePipe } from './moon-name.pipe';

describe('MoonNamePipe', () => {
  it('create an instance', () => {
    const service = {getMoon: (id: number) => mockedMoons.find(moon => moon.id === id) } as unknown as MoonsService;
    const pipe = new MoonNamePipe(service);
    expect(pipe).toBeTruthy();
  });
});
