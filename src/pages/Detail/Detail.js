import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OperationBtns from './OperationBtns/OperationBtns';
import style from './Detail.module.scss';
import OptionList from './OptionList/OptionList';
import AddedOptionBox from './AddedOptionBox/AddedOptionBox';
import DetailModal from './DetailModal';

function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productDetailData: [
      {
        id: 0,
        name: '',
        discription: '',
        imageUrl: '',
        price: 0,
        options: [],
      },
    ],
  });

  const [changeStyle, setChangeStyle] = useState({
    changeText: '함께하면 좋은 추천상품',
    showOption: { display: 'none' },
    changeBorder: { border: '1px solid $gray-color' },
  });
  const { changeText, showOption, changeBorder } = changeStyle;

  const [optionValues, setOptionValues] = useState({
    optionId: 0,
    optionPrice: 0,
  });
  const { optionId, optionPrice } = optionValues;

  let value = product.productDetailData[0].price;
  const [productPrice, setProductPrice] = useState(value);
  const [totalPrice, setTotalPrice] = useState(value);
  const [count, setCount] = useState(1);
  const [showItemBox, setShowItemBox] = useState({ display: 'none' });
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://localhost:8000/products/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setProduct(res);
      });
  }, [params.id]);

  const postToCart = () => {
    fetch('http://localhost:8000/carts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify({
        productId: product.productDetailData[0].id,
        addOptionId: [optionId],
        quantity: count,
        totalPrice: totalPrice,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          console.log('SUCCESS');
        }
      });
  };

  useEffect(() => {
    setProductPrice(value);
    setTotalPrice(value);
  }, [value]);

  const openModal = () => {
    if (!token) {
      alert('로그인을 먼저 해주세요!');
      navigate('/login');
      return;
    }

    if (showItemBox.display === 'none') {
      alert('추가옵션을 선택해주세요 :-)');
      return;
    }

    if (modal) {
      setModal(false);
      return;
    } else {
      setModal(true);
      window.scrollTo(0, 0);
      postToCart();
    }
  };

  const onClickOptionToggle = () => {
    showOption.display === 'none'
      ? setChangeStyle({
          ...changeStyle,
          showOption: { display: 'block' },
          changeBorder: { border: '1px solid #FFCD32' },
        })
      : setChangeStyle({
          ...changeStyle,
          showOption: { display: 'none' },
          changeBorder: { border: '1px solid #b1b1b1' },
        });
  };

  const isExsitOptionPrice = operation => {
    if (optionPrice > 0) {
      setProductPrice(operation * value);
      setTotalPrice(operation * value + optionPrice);
      return;
    }

    setProductPrice(operation * value);
    setTotalPrice(operation * value);
  };

  const minusPrice = () => {
    if (count - 1 < 1) return;
    setCount(count - 1);
    isExsitOptionPrice(count - 1);
  };

  const plusPrice = () => {
    setCount(count + 1);
    isExsitOptionPrice(count + 1);
  };

  const deleteItemBox = price => {
    setShowItemBox({ display: 'none' });
    setTotalPrice(totalPrice - price);

    setChangeStyle({
      ...changeStyle,
      changeText: '함께하면 좋은 추천상품',
    });
  };

  const onClickOptionItem = (id, name, price) => {
    setShowItemBox({ display: 'block' });
    setTotalPrice(productPrice + price);

    setChangeStyle({
      changeText: name,
      showOption: { display: 'none' },
      changeBorder: { border: '1px solid #b1b1b1' },
    });

    setOptionValues({
      optionId: id,
      optionPrice: price,
    });
  };

  return (
    <div className={style.container}>
      <header>
        <div className={style.category}>
          HOME {`>`} 꽃다발 {`>`}
          {product.productDetailData[0].name}
        </div>
      </header>
      <main className={style.content}>
        <img
          className={style.imgBox}
          src={product.productDetailData[0].image_url}
          alt="detailShot"
        />
        <article className={style.detailBox}>
          <ul className={style.productInfo}>
            <li> {product.productDetailData[0].description}</li>
            <li> {product.productDetailData[0].name}</li>
            <li>{product.productDetailData[0].price.toLocaleString('en')}원</li>
          </ul>
          <div className={style.eventTittle}>
            회원 구매 시,
            <span>적립금 2000원 증정!</span>
          </div>
          <div className={style.inBox}>
            <span className={style.contentTittle}>수량</span>
            <div>
              <OperationBtns
                plusPrice={plusPrice}
                count={count}
                minusPrice={minusPrice}
              />
            </div>
          </div>
          <div className={style.inBox}>
            <div className={style.contentTittle}>추가옵션</div>
            <div className={style.option_btn_box} style={changeBorder}>
              <button className={style.optionBtn} onClick={onClickOptionToggle}>
                <div>{changeText}</div>
                <i className={style.btnDown}>⌵</i>
              </button>
              {product.productDetailData[0].options.map(list => (
                <div
                  key={list.id}
                  onClick={() => {
                    onClickOptionItem(list.id, list.name, list.price);
                  }}
                >
                  <OptionList
                    list={list}
                    key={list.id}
                    showOption={showOption}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={style.priceBox}>
            <div>상품가격</div>
            <div>{productPrice.toLocaleString('en')}원</div>
          </div>
          {product.productDetailData[0].options.map(
            list =>
              list.id === optionId && (
                <AddedOptionBox
                  list={list}
                  key={list.id}
                  showItemBox={showItemBox}
                  deleteItem={deleteItemBox}
                />
              )
          )}
          <div className={style.totalPriceBox}>
            <span>총 주문금액</span>
            <span>{totalPrice.toLocaleString('en')}원</span>
          </div>
          <div className={style.contentBtnBox}>
            {modal && <DetailModal openModal={openModal} />}
            <button className={style.yellowBtn} onClick={openModal}>
              장바구니
            </button>
            <button className={style.whiteBtn}>바로 구매</button>
          </div>
        </article>
      </main>
    </div>
  );
}
export default Detail;
