import React, { useEffect, useState } from 'react';
// import styles from './Main.module.scss';
import MainListCard from './MainListCard';

function Main() {
  const [lists, setLists] = useState({
    productList: [],
  });

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(res => {
        setLists(res);
      });
  }, []);

  const filteredListObj1 = lists.productList.filter(list => list.id <= 4);
  const filteredListObj2 = lists.productList.filter(
    list => list.id > 4 && list.id <= 8
  );

  return (
    <main>
      <img
        alt="kukukkakka 배너 이미지"
        src="img/main_banner_1.jpg"
        width="100%"
      />
      <article>
        <MainListCard
          key={filteredListObj1.id}
          lists={filteredListObj1}
          bgColor="#fafafa"
          text1="꽃이 필요한 순간,"
          text2="꾸까 꽃다발"
        />
        <MainListCard
          key={filteredListObj2.id}
          lists={filteredListObj2}
          bgColor="white"
          text1="오늘 바로 받는,"
          text2="당일배송"
        />
      </article>
    </main>
  );
}

export default Main;
