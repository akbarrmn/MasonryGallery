import { dataItem, items } from '../lib/data'
import { motion } from 'framer-motion'

type Props = {
    setSelected: (value: dataItem) => void
}

const Card = ({ item, setSelected }: { item: dataItem, setSelected: (value: dataItem) => void }) => {
    return (
        <div className='inline-block w-full mb-4'>
            <motion.img
                whileHover={{
                    scale: 1.025,
                    transition: {
                        duration: 0.2
                    },
                    zIndex: 1
                }}
                whileTap={{
                    scale: 0.95
                }}
                onClick={() => setSelected(item)}
                src={item.url}
                alt={item.title}
                layoutId={`card-${item.id}`}
                className='w-full h-full bg-base-100 shadow-xl image-full cursor-pointer'
            />
            <div className='flex flex-wrap mt-2 gap-2 mb-2'>
                {item.tags.map((tag) => (
                    <div key={tag} className='badge badge-outline text-zinc-600'>
                        {tag}
                    </div>
                ))}
                <div className='badge badge-outline text-zinc-600'>
                        {item.id}
                    </div>
            </div>
        </div>
    )
}

const List = (props: Props) => {
    return (
        <div className='p-4'>
            <h1 className='text-center font-bold text-4xl mb-8'>Galleries</h1>
            <div className='columns-2 md:columns-3 xl:columns-4 gap-8'>
                {items.map((item) => (
                    <Card key={item.id} setSelected={props.setSelected} item={item} />
                ))}
            </div>
        </div>
    )
}

export default List