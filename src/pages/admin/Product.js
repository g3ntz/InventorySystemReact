import React, { useState } from "react";
import TablePage from "../../components/shared/TablePage/TablePage-template";
import { ProductsTableContent } from "../../data/tableContent";
import { productsTable } from "../../data/tableStructure";
import Modal from "../../components/shared/Modal/Modal";
import { StyledProductHistory } from "../../components/shared/Modal/ProductHistoryModal.styled";

const Product = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showProductHistoryModal, setShowProductHistoryModal] = useState(false);

  return (
    <>
      <TablePage redirectTo={"/admin/product/create"} tableData={productsTable}>
        <ProductsTableContent
          setShowDeleteModal={setShowDeleteModal}
          setShowProductHistoryModal={setShowProductHistoryModal}
        />
      </TablePage>

      <StyledProductHistory
        show={showProductHistoryModal}
        setShowModal={setShowProductHistoryModal}
      >
        <i id="close-img-receive" className="fas fa-window-close" 
          onClick={() => setShowProductHistoryModal(false)}
          style={{
            marginRight: '2%', 
            marginTop: '5px', 
            zIndex: '999', 
            color: 'var(--clr-primary)'
          }}></i>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>

            <div className="cd-timeline-content">
              <h2>Title of section 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde?
              </p>
              <span className="cd-date">Jan 18</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>

            <div className="cd-timeline-content">
              <h2>Title of section 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde?
              </p>
              <span className="cd-date">Jan 18</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>

            <div className="cd-timeline-content">
              <h2>Title of section 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, obcaecati, quisquam id molestias eaque asperiores
                voluptatibus cupiditate error assumenda delectus odit similique
                earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit,
                itaque, deserunt corporis vero ipsum nisi eius odio natus ullam
                provident pariatur temporibus quia eos repellat consequuntur
                perferendis enim amet quae quasi repudiandae sed quod veniam
                dolore possimus rem voluptatum eveniet eligendi quis fugiat
                aliquam sunt similique aut adipisci.
              </p>
              <span className="cd-date">Jan 24</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>

            <div className="cd-timeline-content">
              <h2>Title of section 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde?
              </p>
              <span className="cd-date">Jan 18</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>

            <div className="cd-timeline-content">
              <h2>Title of section 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde?
              </p>
              <span className="cd-date">Jan 18</span>
            </div>
          </div>
        </section>
      </StyledProductHistory>

      <Modal
        show={showDeleteModal}
        setShowModal={setShowDeleteModal}
        modalType={"delete"}
      >
        <p>Are you sure you wanna delete this record?</p>
        <i
          onClick={() => setShowDeleteModal(false)}
          id="close-img-receive"
          className="fas fa-window-close"
        ></i>
        <div className="actions">
          <button>Yes</button>
          <button>No</button>
        </div>
      </Modal>
    </>
  );
};

export default Product;
