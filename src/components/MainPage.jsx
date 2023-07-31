import React from 'react'
import './MainPage.css'
import ReactPlayer from 'react-player'
import Top from './../pages/Top';


export default function MainPage() {
  return (
    <>
        <div className='video'>
        <ReactPlayer
            url={process.env.PUBLIC_URL + 'https://res.ajlabs.co.kr/prj/tm/230711_wilson_shiftv1/shift_video.mp4'}
            width='100%'
            height='500px'
            playing={true}
            muted={true}
            controls={true}
            loop={true}
        />
        </div>
      <div className='submenu'>
        <div><p>스트링 수리 서비스</p></div>
        <div><p>오프라인 스토어 안내</p></div>
        <div><p>멤버십 가입하고 혜택을 받아보세요</p></div>
      </div>  

      <div className='text'>
        <h1>PLAY TENNIS PRODUCT</h1>
        <p>지금, 플레이 테니스의 상품을 만나보세요.</p>
      </div>

      <div className='test'>
        <div className='test1'></div>
        <div className='test2'>2</div>
        <div className='test3'>3</div>
        <div style={{clear:'both'}}></div>

        <div className='test4'>4</div>
        <div className='test5'>5</div>
        <div className='test6'>6</div>
        <div style={{clear:'both'}}></div>
      </div>
    </>

  )
}

