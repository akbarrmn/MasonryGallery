import { dataItem } from '../lib/data'

import { motion } from 'framer-motion'
type Props = {
    setSelected: (value: dataItem | null) => void
    selected: dataItem | null
}

const Modal = ({ selected, setSelected }: Props) => {
    if (!selected) {
        return <></>
    }
    return (
        <div
            onClick={() => setSelected(null)}
            className='fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-auto'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                // className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg'
                className='w-full max-w-[700px] mx-auto mt-20 mb-8 px-8 cursor-default'
            >
                <motion.div
                    layoutId={`card-${selected.id}`}
                >
                    <img
                        src={selected.url}
                        alt={selected.title}
                        className='w-full h-full bg-base-100 shadow-xl image-full cursor-pointer'
                    />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                    className='bg-white p-4'
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className='text-2xl font-bold mb-2'>{selected.title}</h3>
                    <div className='flex flex-wrap mt-2 gap-2 mb-2'>
                        {selected.tags.map((tag) => (
                            <div key={tag} className='badge badge-outline text-zinc-600'>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <p className='my-4'>{selected.description}</p>
                    <motion.button
                        className='btn btn-primary'
                        whileTap={{ scale: 0.95 }}
                    >Download</motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default Modal