import Link from 'next/link'; 
import Image from 'next/image'; 

const Footer = () => {
  return (
    <footer>
        <div className="padding-container max-container flex w-full flex-coll gap-14 ">
            <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                <Link href='/' className="mb-10 ml-10"> 
                    <Image alt="5Review" src="/5Review.svg"
                            width={100} height={29} />
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer