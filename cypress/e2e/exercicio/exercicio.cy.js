/// <reference types="cypress" />


context('Actions', () => { 
    beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Apenas limpa a página para os testes iniciarem sem usuários', () => {
        const nome = 'Almir'
        const email = 'almir@email.com'
        const tel = '21 123476'

        cy.get('form.sc-gLDzan ').find('input[type=text]').type(`${nome}`)
        cy.get('form.sc-gLDzan ').find('input[type=email]').type(`${email}`)
        cy.get('form.sc-gLDzan ').find('input[type=tel]').type(`${tel}{enter}`).wait(1000)

        cy.get('.delete').each(($botao) => {
            cy.wrap($botao).click();
        });
        cy.get('div.sc-beqWaB').should('not.exist').wait(1000);
    });
    

    it('Adiciona o usuario', () => {
    
    const nome = 'Almir'
    const email = 'almir@email.com'
    const tel = '21 123476'

    cy.get('form.sc-gLDzan ').find('input[type=text]').type(`${nome}`)
    cy.get('form.sc-gLDzan ').find('input[type=email]').type(`${email}`)
    cy.get('form.sc-gLDzan ').find('input[type=tel]').type(`${tel}{enter}`)
    cy.get('ul.sc-eDDNvR').find('li').first().should('have.text', `${nome}`).wait(1000)
    })

    it('Edita um usuario', () => {
    const nome = 'Marcus'
    cy.get('div.sc-beqWaB ').first().find('.edit').click()
    cy.get('form.sc-gLDzan ').find('input[type=text]').clear().type(`${nome}`)
    cy.get('.alterar').click()
    cy.get('ul.sc-eDDNvR').find('li').first().should('have.text', `${nome}`)
    
    })

    it('Deleta um usuario', () => {
        cy.get('div.sc-beqWaB ').first().find('.delete').click()
        cy.get('div.sc-beqWaB').should('not.exist');
    })

    it('Adiciona um usuario para o primeiro teste não falhar ao executar novamente :)', () => {
    
    
    
})

})