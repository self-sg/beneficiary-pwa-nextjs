import Styles from '../styles/BottomNav.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiHomeSmile2Line, RiHomeSmile2Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line, RiUser5Fill } from 'react-icons/ri'

// Thank you to https://github.com/coderzway/next-js-bottom-navigation-bar

export default function BottomNav(props) {
    const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                router.push('/')
                break;
            case 'support':
                router.push('/support')
                break;
            case 'jobs':
                router.push('/jobs')
                break;
            case 'profile':
                router.push('/profile')
                break;
            default:
                router.push('/')
                break;
        }
    }, [activeTabs])

    return (
        <div className={`${Styles.bottomNav}`}>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'support' ?
                    <RiSearchEyeFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('support')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('support')}
                    />}
            </div>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'jobs' ?
                    <AiFillHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('jobs')}
                    /> :
                    <AiOutlineHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('jobs')}
                    />}
            </div>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'profile' ?
                    <RiUser5Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('profile')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('profile')}
                    />}
            </div>
        </div>
    )
}
