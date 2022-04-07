import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OperationBtns from './OperationBtns/OperationBtns';
import style from './Detail.module.scss';
import OptionList from './OptionList/OptionList';
import AddedOptionBox from './AddedOptionBox/AddedOptionBox';
import DetailModal from './DetailModal';

function Detail() {
  const params = useParams();

  const [modal, setModal] = useState(false);
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

  let value = product.productDetailData[0].price;
  const [productPrice, setProductPrice] = useState(value);
  const [totalPrice, setTotalPrice] = useState(value);
  const [optionId, setOptionId] = useState(0);
  const [changeText, setChangeText] = useState('함께하면 좋은 추천상품');
  const [showItemBox, setShowItemBox] = useState({ display: 'none' });
  const [showOption, setShowOption] = useState({ display: 'none' });
  const [changeBorder, setChangeBorder] = useState({
    border: '1px solid $gray-color',
  });
  const [count, setCount] = useState(1);
  const optionPrice = 0;

  // const navigate = useNavigate();
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
      body: JSON.stringify({
        productId: product.productDetailData[0].id,
        options: [],
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

  console.log('optionId: ', optionId);

  const openModal = () => {
    // 비회원일 때
    // if() {
    //   alert('로그인을 먼저 해주세요!');
    //   navigate('/login');
    //   return;
    // }

    if (showItemBox.display === 'none') {
      alert('추가옵션을 선택해주세요 :-)');
      return;
    }
    modal ? setModal(false) : setModal(true);
    window.scrollTo(0, 0);
  };

  // 추가상품박스 보이게 하는 함수
  const optionBoxHandler = () => {
    showItemBox.display === 'none' && setShowItemBox({ display: 'block' });
  };

  const selectItem = () => {
    optionBoxHandler();
    setShowOption({ display: 'none' });
    setChangeBorder({ border: '1px solid #b1b1b1' });

    if (showItemBox.display === 'block') {
      // setChangeText(text);
      setTotalPrice(totalPrice - optionPrice);
    } else {
      setChangeText('함께하면 좋은 추천상품');
      setTotalPrice(totalPrice + optionPrice);
    }
  };

  const onClickOptionToggle = () => {
    if (showOption.display === 'none') {
      setShowOption({ display: 'block' });
      setChangeBorder({ border: '1px solid #FFCD32' });
      return;
    } else {
      setShowOption({ display: 'none' });
      setChangeBorder({ border: '1px solid #b1b1b1' });
      return;
    }
  };
  const minusPrice = () => {
    if (count - 1 < 1) return;
    setCount(count - 1);
    setProductPrice((count - 1) * value);
    setTotalPrice((count - 1) * value);
    showItemBox.display === 'block' &&
      totalPrice((count - 1) * value + optionPrice);
  };

  const plusPrice = () => {
    setCount(count + 1);
    setProductPrice((count + 1) * value);
    setTotalPrice((count + 1) * value);
    showItemBox.display === 'block' &&
      setTotalPrice(value * (count + 1) + optionPrice);
  };

  const deleteItemBox = () => {
    setShowItemBox({ display: 'none' });
    setTotalPrice(totalPrice - optionPrice);
    setChangeText('함께하면 좋은 추천상품');
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
                    selectItem();
                    setChangeText(list.name);
                    setOptionId(list.id);
                  }}
                >
                  <OptionList
                    list={list}
                    key={list.id}
                    showOption={showOption}
                    optionId={optionId}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={style.priceBox}>
            <div>상품가격</div>
            <div>{productPrice.toLocaleString('en')}원</div>
          </div>
          {product.productDetailData[0].options.map(list => (
            <AddedOptionBox
              list={list}
              key={list.id}
              changeStyle={showItemBox}
              deleteItem={deleteItemBox}
              optionId={optionId}
            />
          ))}
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
