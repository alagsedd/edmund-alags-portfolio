import { Switch, Text, useColorMode } from "@chakra-ui/react";
import styles from "../styles/ColorModeSwitch.module.css";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div className={styles.switchBox}>
        <Switch
          className={styles.switch}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        />
        <Text>Dark</Text>
      </div>
    </>
  );
};

export default ColorModeSwitch;
