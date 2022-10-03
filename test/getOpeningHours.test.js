const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const strClosed = 'The zoo is closed';
  const strOpen = 'The zoo is open';
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    const retorno = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const vazia = getOpeningHours();
    expect(vazia).toEqual(retorno);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed Já que o Zoo está sempre fechado na segunda', () => {
    const mondayAt9 = getOpeningHours('Monday', '09:00-AM');
    expect(mondayAt9).toBe(strClosed);
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    const tuesdayAt9 = getOpeningHours('Tuesday', '09:00-AM');
    expect(tuesdayAt9).toBe(strOpen);
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    const wednesdayAt9 = getOpeningHours('Wednesday', '09:00-PM');
    expect(wednesdayAt9).toBe(strClosed);
  });
  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday', () => {
    const thuAt9 = getOpeningHours('Thu', '09:00-AM');
    expect(thuAt9).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Para os argumentos Friday e 09:00-ZM', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM').toThrowError(new Error('The hour should represent a number')));
  });
});
