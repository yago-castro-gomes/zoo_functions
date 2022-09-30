const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const count = handlerElephants('count');
    expect(count).toEqual(4);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const names = handlerElephants('names');
    const Jeff = handlerElephants('names').find((name) => name === 'Jefferson');
    expect(names).toContain(Jeff);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const age = handlerElephants('averageAge');
    expect(age).toBeLessThanOrEqual(10.5);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    const local = handlerElephants('location');
    expect(local).toBe('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const pop = handlerElephants('popularity');
    expect(pop).toBeGreaterThanOrEqual(5);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const avab = handlerElephants('availability');
    const esperado = ['Monday'];
    expect(avab).toEqual(expect.not.arrayContaining(esperado));
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    const vazia = handlerElephants();
    expect(vazia).toBe(undefined);
  });
});
