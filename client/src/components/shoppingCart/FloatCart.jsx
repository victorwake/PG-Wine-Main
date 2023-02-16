import { useSelector} from 'react-redux';
import React from 'react';


export const FloatCart = () => {

    const cart = useSelector(state => state.cart)

    document.addEventListener('DOMContentLoaded', function() {
        var openCartModal = document.querySelector('#openCartModal');
        var cartModal = document.querySelector('#cartModal');
        
        openCartModal.addEventListener('click', function() {
          cartModal.classList.add('show');
          cartModal.style.display = 'block';
          document.body.classList.add('modal-open');
        });
      });
    

return (
<div>
<div class="container">
      

    </div>
    <div class="modal" id="openCartModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title" id="exampleModalLabel">
              Tu carrito de compras
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-image">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cant</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                {cart?.map((w => (
                <td>
                <td scope="col" >{w.name}</td>
                <td scope="col">{w.varietal}</td>
                <td scope="col">{w.winery}</td>
                <td scope="col">{w.price}</td>
                <img src={w.image}  class="img-fluid img-thumbnail" alt="Sheep"/>
                </td>)))}
                  <td>
                    <a href="#" class="btn btn-danger btn-sm">
                      <i class="fa fa-times"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> 
            <div class="d-flex justify-content-end">
              {/* <h5>Total: <span class="price text-success">$89</span></h5> */}
            </div>
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" data-dismiss="modal"/>Cerrar<button/>
                </div>
                </div>
                </div>
            </div>
            </div>
)

}