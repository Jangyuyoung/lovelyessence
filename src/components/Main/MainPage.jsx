import React, { useState } from 'react'
import './MainPage.css'
import ReactPlayer from 'react-player'
import data from '../../data'


export default function MainPage() {

let [racket] = useState(data)
console.log(racket[0].pricet)
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
        <div className='test1'>
          <img src="https://user-images.githubusercontent.com/119558185/257451418-1a7aecca-2a7f-42b2-b961-00839d56629c.png" width="70%" />
          <h4>{racket[0].title}</h4>
          <p>상품설명</p>
        </div>
        <div className='test2'>
          <img src="https://user-images.githubusercontent.com/119558185/257451424-b0e11a72-6503-4e38-9351-7b7942f3f63d.png" width="50%" />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='test3'>
          <img src="https://user-images.githubusercontent.com/119558185/257451429-b3f8f011-cf44-4dc4-ad26-f736452f14f1.png" width="50%" />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div style={{clear:'both'}}></div>

        <div className='test4'>
          <img src="https://user-images.githubusercontent.com/119558185/257451432-4f554ede-9f33-4779-b68f-53925bba5233.png" width="50%" />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='test5'>
          <img src="https://user-images.githubusercontent.com/119558185/257451436-64c6ae34-d137-4d3a-8c7f-9a3d4fee6784.png" width="50%" />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='test6'>
          <img src="https://user-images.githubusercontent.com/119558185/257451442-b72537a5-d321-4712-b632-d5cf3861d28e.png" width="70%" />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div style={{clear:'both'}}></div>
      </div>
    </>

  )
}

