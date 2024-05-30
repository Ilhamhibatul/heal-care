import React from 'react';
import SingleShop from '../../../../components/SingleShop/SingleShop';

const ShopBanner = () => {
   return (
      <>
         <section className="shop-banner-area pt-120 pb-120">
            <div className="container">
               <div className="row mt-20">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="product-showing mb-40">
                        <p>Menampilkan 1–22 of 32 hasil</p>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-6">
                     <div className="shop-tab f-right">
                        <ul className="nav text-center" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                 aria-controls="home" aria-selected="true"><i className="fas fa-th-large"></i> </a>
                           </li>
                        </ul>
                     </div>
                     <div className="pro-filter mb-40 f-right">
                        <form action="#">
                           <select name="pro-filter" id="pro-filter">
                              <option defaultValue="1">Filter </option>
                              <option defaultValue="2">Penjualan Teratas </option>
                              <option defaultValue="3">Produk baru </option>
                              <option defaultValue="4">Produk A sampai Z </option>
                           </select>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                           <div className="row">

                              <SingleShop image="1" name="Obat" title="Paracetamol" />
                              <SingleShop image="2" name="Obat" title="Ibuprofen" />
                              <SingleShop image="3" name="Obat" title="Cetirizine" />
                              <SingleShop image="4" name="Obat" title="Omeprazole" />
                              <SingleShop image="5" name="Obat" title="Metformin" />
                              <SingleShop image="6" name="Obat" title="Amoxicillin" />
                              <SingleShop image="7" name="Obat" title="Loratadine" />
                              <SingleShop image="8" name="Obat" title="Diazepam" />
                              <SingleShop image="9" name="Obat" title="Aspirin" />


                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="basic-pagination basic-pagination-2 text-center mt-20">
                        <ul className='flex-list'>
                           <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                           <li><a href="#">01</a></li>
                           <li><a href="#">02</a></li>
                           <li><a href="#">03</a></li>
                           <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopBanner;