import PropTypes from 'prop-types'
import { Wrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
      <Wrapper>
          <Title>{title}</Title>
          {children}
      </Wrapper>
    );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};