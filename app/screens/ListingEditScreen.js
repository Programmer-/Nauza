import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "floor-lamp" },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#ca3a6e",
    icon: "shoe-heel",
  },
  { label: "Camera", value: 3, backgroundColor: "#9596be", icon: "camera" },
  { label: "Cars", value: 4, backgroundColor: "#de7a7d", icon: "car" },
  {
    label: "Games",
    value: 5,
    backgroundColor: "#937d86",
    icon: "gamepad-variant-outline",
  },
  { label: "Sports", value: 6, backgroundColor: "#251a25", icon: "volleyball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#91bab7",
    icon: "headphones-settings",
  },
  { label: "Books", value: 8, backgroundColor: "#2ba79a", icon: "bookshelf" },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#738e77",
    icon: "all-inclusive",
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="32%"
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={1}
          placeholder="Description"
        />
        <SubmitButton title="Post" color="secondary" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
