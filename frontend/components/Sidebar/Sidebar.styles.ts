import styled from 'styled-components';

export const Sidebar = styled.aside<{ open: boolean; }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0 0.75rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  transition: 0.6s;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 360px) {
    width: ${({ theme }) => theme.sidebarWidth}
  }
`;

export const SidebarHeader = styled.header`
  & > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin: 1rem 0 2rem;
  }
`;

export const CloseMenu = styled.span`
  position: absolute;
  right: -14px;
  top: -10px;

  font-size: 20px;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
  cursor: pointer;

  transition: 0.6s;

  &:hover {
    color: #e0224d;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 0.5rem 0;
`;

export const MenuLinks = styled.a<{ active: boolean; }>`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;

  transition: 0.6s;

  &:hover {
    color: #73d597;
  }

  color: ${({ active }) => active ? '#73d597' : '#fff'}

`;

export const LinkTitle = styled.span`
  margin-left: 16px
`;
