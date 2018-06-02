/**
 * Configures Enzyme tu use the adapter for the react
 * version of the project
 */
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// You can put different browser APIs here like:

// const localStorageMock = {
//  getItem: jest.fn(),
//  setItem: jest.fn(),
//  clear: jest.fn()
// };
// global.localStorage = localStorageMock
