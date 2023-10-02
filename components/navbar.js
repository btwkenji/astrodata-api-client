import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >

          <LinkItem href="/" path={path}>
            homepage
          </LinkItem>

          <LinkItem href="/info" path={path}>
            info
          </LinkItem>


          <LinkItem href="/about" path={path}>
            about us
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/kenjitheman/wdcg_api"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            api
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/" ml={6} >
                  homepage
                </MenuItem>
                <MenuItem as={MenuLink} href="/info" ml={6} >
                  info
                </MenuItem>
                <MenuItem as={MenuLink} href="/about" ml={6} >
                  about us
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="https://github.com/wdcg_api"
                  ml={5}
                >
                  api
                </MenuItem>
                <MenuItem as={MenuLink} href="https://github.com/kenjitheman/wdcg_api.c" ml={5}>
                  source code
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
