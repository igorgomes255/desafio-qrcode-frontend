import { Button } from "@chakra-ui/react";
import { Main } from "./styles";

const UserPage = () => {
  return (
    <Main>
      <h3>Hello, my name is </h3>
      <h1>My history</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <section>
        <a href="https://www.linkedin.com/">
          <Button colorScheme="teal" variant="outline" size="lg">
            Linkedin
          </Button>
        </a>

        <a href="https://www.github.com/">
          <Button colorScheme="teal" variant="outline" size="lg">
            Github
          </Button>
        </a>
      </section>
    </Main>
  );
};

export { UserPage };
