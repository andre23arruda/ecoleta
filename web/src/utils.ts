const mainTitle = 'Ecoleta'

function title(document: Document, pageTitle: string) {
    document.title = `${ mainTitle } | ${ pageTitle }`
}

export { title }
