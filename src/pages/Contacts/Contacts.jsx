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
  );
}

export default Contacts;
