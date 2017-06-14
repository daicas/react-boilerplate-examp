import styled from 'styled-components';

import NormalA from 'components/A';

const A = styled(NormalA)`
  ${props => props.logo && css`
		float: left;
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
	`}
`;

export default A;
