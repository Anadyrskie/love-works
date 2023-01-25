
export default function Contact({contact}) {
    return (
        <div id='contact' className={'dark:text-white text-center mx-auto px-10 pb-10'}>
            <h1 className={'text-3xl text-bold'}>Contact</h1>
            <span className=''>{contact.type ? contact.type + ':' : ''} <a href={contact.prefix ? contact.prefix + contact.value : '#contact'}>{contact.value}</a></span>
        </div>
    )
}