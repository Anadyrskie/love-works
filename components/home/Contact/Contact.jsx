
export default function Contact({contact}) {
    return (
        <div id='contact' className={'dark:text-white text-center mx-auto px-10 pb-10'}>
            <h1 className={'text-3xl font-semibold mb-2'}>Contact</h1>
            <span >{contact.type ? contact.type + ':' : ''} <a className='text-blue-500' href={contact.prefix ? contact.prefix + contact.value : '#contact'}>{contact.value}</a></span>
        </div>
    )
}