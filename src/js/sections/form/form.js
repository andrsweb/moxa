import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

document.addEventListener( 'DOMContentLoaded', () => {

    'use strict'
    
    toggleForm()
})

// Form

const toggleForm = () => {

    const headerForm    = document.querySelector( '.header-form' )
    const buttons       = document.querySelectorAll( '.nav-button' )
    const closeButton   = document.querySelector( '.close-button' )
    const targetElement = document.querySelector( '#form-lock' )
    
    buttons.forEach( button => {
    
        button.addEventListener( 'click', () => {
            if ( ! headerForm.classList.contains( 'opened' ) ) {
                headerForm.classList.add( 'opened' )
                disableBodyScroll( targetElement )
            }
        } )
    } )
    
    // Close form
    closeButton.addEventListener( 'click', () => {
    
        if ( headerForm.classList.contains( 'opened' ) ) {
            headerForm.classList.remove( 'opened' )
            enableBodyScroll( targetElement )
        }
    } )
}
