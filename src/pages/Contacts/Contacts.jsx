import { useState, useEffect } from 'react';
import {
  Section,
  Container,
  BsPersonAddSvg,
  SvgWrapper,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading, getError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import FormPhonebook from 'components/FormPhonebook';
import Contact from 'components/ContactCard/ContactCard';
import Filter from 'components/Filter';
import Modal from 'components/Modal/Modal';
import { motion } from 'framer-motion';
import Loader from 'components/Loader/Loader';
import EmptyData from 'components/EmptyData/EmptyData';

function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section>
        <Container>
          {isLoading && !error && <Loader />}
          {contacts.length === 0 ? (
            <EmptyData onClick={toggleModal}>
              {showModal && (
                <Modal onClick={toggleModal}>
                  <FormPhonebook onClick={toggleModal} />
                </Modal>
              )}
            </EmptyData>
          ) : (
            <>
              <Filter />
              <Contact />
              <SvgWrapper onClick={toggleModal}>
                {showModal && (
                  <Modal onClick={toggleModal}>
                    <FormPhonebook onClick={toggleModal} />
                  </Modal>
                )}
                <BsPersonAddSvg />
              </SvgWrapper>
            </>
          )}
        </Container>
      </Section>
    </motion.div>
  );
}

export default Contacts;
