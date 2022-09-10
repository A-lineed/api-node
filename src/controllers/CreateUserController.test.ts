describe('CreateUserController', () => {
  
        function soma(a: number, b: number) {
            return a + b 
        }

        const result = soma(1,2)
        it('Deve retornar a soma de dois números', () => {
       
            expect(result).toBe(3)
        })

        it('Não deve retornar um resultado diferente de 3', () => {

            expect(result).not.toBe(5)
        })
})