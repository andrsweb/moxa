document.addEventListener( 'DOMContentLoaded', () => {

    'use strict'

window.addEventListener('scroll', headerScroll )
})

const headerScroll = () => {
    const scrollTop = window.scrollY
    const header = document.querySelector( '.header' )

    if  ( ! header) return

    if (scrollTop > 0) {
        if ( ! header.classList.contains( 'scrolled' ) )
            header.classList.add( 'scrolled' )

    }   else {
        if ( header.classList.contains( 'scrolled' ) )
            header.classList.remove( 'scrolled' )
    }
}