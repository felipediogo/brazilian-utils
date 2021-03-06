import * as API from '.';

describe('Public API', () => {
  const methods = [
    'formatPJ',
    'isValidPJ',
    'getStates',
    'formatCPF',
    'isValidCEP',
    'formatCEP',
    'isValidPIS',
    'isLastChar',
    'isValidCPF',
    'isValidIE',
    'formatCNPJ',
    'isValidCNPJ',
    'onlyNumbers',
    'generateCPF',
    'isValidEmail',
    'isValidPhone',
    'generateCNPJ',
    'formatBoleto',
    'isValidBoleto',
    'generateChecksum',
    'generateRandomNumber',
  ];

  Object.keys(API).forEach((method) => {
    test(`${method} is available in the Public API`, () => {
      expect(methods).toContain(method);
    });
  });
});
