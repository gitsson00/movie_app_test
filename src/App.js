import React from 'react';
//import Potato from './Potato'; // App 컴포넌트에 Potato 컴포넌트를 임포트 // function 안에 <Potato /> 넣기
// ./ 현재 파일이 있는 폴더  ../ 현재 파일의 상위 폴더 
// food fav props 데이터를 객체로 변환하여 funtion food에 전달 
// 전달 받은 props를 인자로 받아 console로 출력.
// {props.fav} 객체있는값쓰려면
// 구조 분해 할당
function Food ({name, picture}) {
    return (
    <div>
    <h2>I Like {name} </h2>
    <img src={picture} />
    </div>
    );
}

const foodILike = [
    {
        name: '간장게장',
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDJfMTI2%2FMDAxNjI3OTA3ODIzMTkx.mr58L9KuUpM36IWFYMr2HSbxzXr6qkX5zxhPSuvXJ4og.Ivq45P8NW8pKo8IaQai1j9XrAM04llwnVy83ZLc6Y28g.JPEG.jbb1726%2FKakaoTalk_20210802_211703638_07.jpg&type=sc960_832'
        ,
    },
    {
        name: '방어회',
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDJfMTA5%2FMDAxNjM4NDA5NTE5NTE3.XZ-doSvbrkg7n7CGnDuPeUF2sNlk03gSTGmArtzxukkg.iHm7vas9RZI_8i8WjymW4bWPzffaXm-GUzqBDjs9O_og.JPEG.qkekqhfka%2F21.JPG&type=sc960_832'
        ,
    },
    {
        name: '간장게장',
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDJfMTI2%2FMDAxNjI3OTA3ODIzMTkx.mr58L9KuUpM36IWFYMr2HSbxzXr6qkX5zxhPSuvXJ4og.Ivq45P8NW8pKo8IaQai1j9XrAM04llwnVy83ZLc6Y28g.JPEG.jbb1726%2FKakaoTalk_20210802_211703638_07.jpg&type=sc960_832'
        ,
    },
    {
        name: '방어회',
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDJfMTA5%2FMDAxNjM4NDA5NTE5NTE3.XZ-doSvbrkg7n7CGnDuPeUF2sNlk03gSTGmArtzxukkg.iHm7vas9RZI_8i8WjymW4bWPzffaXm-GUzqBDjs9O_og.JPEG.qkekqhfka%2F21.JPG&type=sc960_832'
        ,
    },
];
function App() {
    return ( // 자바에 객체 인스턴스넣는 기분 
    <div>
        {foodILike.map(dish => (
        <Food name= {dish.name} picture={dish.image}/>
        ))}
        
    </div>
    );
}

export default App;
