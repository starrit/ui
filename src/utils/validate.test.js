import validate, {required} from './validate';
import renderer from 'react-test-renderer';

describe('Validate Util Functions', () => {
  it('should validate email pattern', () => {
    expect(validate.isValidEmail('test@example.com')).toBeTruthy();
  });

  it('should return jsx element with error message', () => {
    const tree = renderer.create(required('')).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not return anything', () => {
    const tree = renderer.create(required('Some string here')).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
