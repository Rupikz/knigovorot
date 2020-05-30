import {
  hashPassword,
  comparePassword,
  isValidEmail,
  valid,
  isValidatePassword,
  isEmpty,
} from '../server/helpers/validations';

test('test hashPassword', () => {
  expect(hashPassword('admin').length).toEqual(60);
  expect(hashPassword('CDwi@ZnQ1}').length).toEqual(60);
  expect(hashPassword('O$y~7c?UhW70QXsq%Mq~').length).toEqual(60);
  expect(hashPassword('~bf5?$KH}{THVnNENU5RG5$WX5K~~K').length).toEqual(60);
});

test('test comparePassword', () => {
  expect(comparePassword(hashPassword('admin'), 'admin')).toBeTruthy();
  expect(comparePassword(hashPassword('@a}QuBLvKS'), '@a}QuBLvKS')).toBeTruthy();
  expect(comparePassword(hashPassword('Zm?HErY2Zs'), 'Zm?HErY2Zs')).toBeTruthy();
  expect(comparePassword(hashPassword('nAo}0m|gF$'), 'nAo}0m|gF$')).toBeTruthy();
});

test('test isValidEmail', () => {
  expect(isValidEmail('fsfvsd232f23r_fw@fsdfas.few')).toBe(true);
  expect(isValidEmail('hdanm-vsd23.2f23r_fw@hgfjhy.com')).toBe(true);
  expect(isValidEmail('admin-a.d_min@gmail.com')).toBe(true);
  expect(isValidEmail('')).toBe(false);
  expect(isValidEmail('ацупцу')).toBe(false);
  expect(isValidEmail('admin.ru')).toBe(false);
  expect(isValidEmail('admin@@@gmail.com')).toBe(false);
  expect(isValidEmail('ad}["/min@gmail.com')).toBe(false);
  expect(isValidEmail('ad[min@gmail.com')).toBe(false);
  expect(isValidEmail('ad"min@gma[]{}:"il.com')).toBe(false);
  expect(isValidEmail('ad/min@gmail.com')).toBe(false);
  expect(isValidEmail('ad:min@gmail.com')).toBe(false);
  expect(isValidEmail('ad;min@gmail.com')).toBe(false);
  expect(isValidEmail('&^%@gmail.com')).toBe(false);
});

test('test valid', () => {
  expect(valid('<script>text<script>')).toBe('text');
  expect(valid('text\'')).toBe('text');
  expect(valid('text\';fdsf')).toBe('textfdsf');
  expect(valid('<text>')).toBe('');
  expect(valid('<script <><script>text')).toBe('text');
});

test('test isValidatePassword', () => {
  expect(isValidatePassword('')).toBe(false);
  expect(isValidatePassword('ef')).toBe(false);
  expect(isValidatePassword('efwfe')).toBe(false);
  expect(isValidatePassword('@a}QuBLvKS')).toBe(true);
  expect(isValidatePassword('~bf5?$KH}{THVnNENU5RG5$WX5K~~K')).toBe(true);
});

test('test isEmpty', () => {
  expect(isEmpty('')).toBe(true);
  expect(isEmpty('                ')).toBe(true);
  expect(isEmpty('       fd    ')).toBe(false);
  expect(isEmpty('@a}QuBLvKS')).toBe(false);
});
