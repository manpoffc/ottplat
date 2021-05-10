function HeaderItem({Icon, title}) {
    return (
        <div className='flex flex-col cursor-pointer items-center group w-12 sm:w-20 hover:text-white'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='uppercase tracking-widest opacity-0 group-hover:opacity-100 '>{title}</p>
        </div>
    )
}

export default HeaderItem
