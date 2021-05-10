import{
    BadgeCheckIcon,
    CollectionIcon,HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
const { default: HeaderItem } = require("./HeaderItem");

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center  h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl space-x-4 mb-2 '>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='verified' Icon={BadgeCheckIcon} />
                <HeaderItem title='collections' Icon={CollectionIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />
                
            </div>
            <a className='text-4xl text-gray-50 font-black'>POCO</a>
        </header>
    )
}

export default Header
