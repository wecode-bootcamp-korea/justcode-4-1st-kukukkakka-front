import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.scss';
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

  const filtered_subscriptrion_list = lists.productList.filter(
    list => list.id > 9 && list.id <= 11
  );
  const filtered_bouquet_list = lists.productList.filter(list => list.id <= 4);
  const filtered_today_delivery_list = lists.productList.filter(
    list => list.id > 4 && list.id <= 8
  );

  const navigate = useNavigate();

  const goToLink = () => {
    navigate('/list');
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <img
        alt="kukukkakka 배너 이미지"
        src="img/main_banner_1.jpg"
        width="100%"
      />

      <article>
        <section className={styles.mainTitleContainer}>
          <section className={styles.mainTitleWrapper}>
            <h1 className={styles.mainTitle}>2주에 한 번, 나를 위한 행복</h1>
            <strong className={styles.mainTitleBottom}>
              꾸꾸까까 꽃 정기구독
            </strong>
            <p className={styles.mainTitleContent}>
              이 계절 가장 이쁜 꽃으로 구성된 구독 꽃이예요!
            </p>
            <div className={styles.sizeWrapper}>
              <span className={styles.size}>S</span>
              <span className={styles.size}>M</span>
              <span
                className={styles.size}
                style={{ backgroundColor: '#D3D3D3', padding: '3px 8px' }}
              >
                L
              </span>
              <span
                className={styles.size}
                style={{ backgroundColor: '#D3D3D3', padding: '3px 5px' }}
              >
                XL
              </span>
            </div>
            <div>
              <button type="button" className={styles.learn_more_subscription}>
                정기구독 더 알아보기
              </button>
            </div>
          </section>

          <MainListCard
            key={filtered_subscriptrion_list.id}
            lists={filtered_subscriptrion_list}
            containerMargin="0"
          />
        </section>

        <MainListCard
          key={filtered_bouquet_list.id}
          lists={filtered_bouquet_list}
          bgColor="#fafafa"
          title="꽃이 필요한 순간,"
          subTitle="꾸까 꽃다발"
          text="더보기"
          linkTo={goToLink}
        />

        <img
          alt="kukukkakka 서브 배너 이미지"
          src="img/main_sub_banner.png"
          width="100%"
          style={{ marginTop: '-20px' }}
        />

        <MainListCard
          key={filtered_today_delivery_list.id}
          lists={filtered_today_delivery_list}
          bgColor="white"
          title="오늘 바로 받는,"
          subTitle="당일배송"
          text="더보기"
        />
      </article>
    </main>
  );
}

export default Main;
