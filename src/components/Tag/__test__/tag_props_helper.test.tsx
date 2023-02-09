import { buildTagClassName } from '../utils/tag_props_helper';

describe('Test Tag Props Helper', () => {
  it('should create a className for TagClassName with default shape and type', () => {
    const result = buildTagClassName('pina-test');
    expect(result).toEqual('pina-test pina-test__type--default pina-test__shape--default ');
  });
  
  it('should create a className for TagClassName with type and shape is given', () => {
    const result = buildTagClassName('pina-test', 'danger', 'rounded');
    expect(result).toEqual('pina-test pina-test__type--danger pina-test__shape--rounded ');
  });
});
