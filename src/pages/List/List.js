import React, { useEffect, useState } from 'react';
import styles from '../List/List.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import ListCard from '../List/ListCard';
function List() {
  const [lists, setLists] = useState({
    productList: [],
  });

  const [lowerPrice, setLowerPrice] = useState([]);
  const [inputs, setInputs] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(res => {
        console.log(res.message);
        setLists(res);
      });
  }, []);

  //유저가 찾은 키워드를 백엔드에 보내주기

  // const sendKeywords = () => {
  //   fetch('/keywords', {
  //     method: 'post',
  //     body: JSON.stringify({
  //       keyword: inputs,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => console.log({ message: result }));
  // };

  const inputValue = e => {
    e.preventDefault();
    if (e.key === 'Enter') setInputs(e.target.value);
  };

  const filterWords = lists.productList.filter(list =>
    list.name.includes(inputs)
  );

  const sortByPrice = () => {
    const getPrice = lists.productList.sort((a, b) => a.price - b.price);
    return setLowerPrice(getPrice);
  };

  return (
    <>
      <section className={styles.listBanner}>
        <div className={styles.bannerContainer}>
          <p>꾸꾸까까 꽃다발</p>
          <span>계절을 가득 담은 꽃다발로</span>
          <span>당신의 일상을 특별한 날로 만들어보세요.</span>
        </div>
      </section>
      <section className={styles.listTop}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchBox}
              type="text"
              placeholder="검색어를 입력하세요"
              onChange={inputValue}
              onKeyUp={inputValue}
            />
            <div className={styles.icons}>
              <AiOutlineSearch size="1.5em" color="#ddd" />
            </div>
          </div>

          <div className={styles.filterBox}>
            <ul>
              <li>사이즈순</li>
              <li onClick={sortByPrice}>가격 낮은 순</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.listContainer}>
        {filterWords.map(list => (
          <ListCard list={list} key={list.id} />
        ))}
      </div>
    </>
  );
}

export default List;
