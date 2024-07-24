import React, { useState } from "react";

import { Link, useForm, usePage } from "@inertiajs/react";
import { Badge, Drawer, Divider, List, Avatar, Button } from "antd";

import { FaPowerOff, FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import DangerButton from "../DangerButton";

const Navbar = ({ initialCartItems }) => {
  const auth = usePage().props.auth;
  const app = usePage().props.app;
  const { data, destroy, post } = useForm();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [cartItems, setCartItems] = useState(initialCartItems);

  const addQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const subtractQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const proceedOrder = (e) => {
    e.preventDefault();
    data.cartItems = cartItems;
    post("place/order", {
      onSuccess: () => {
        setCartItems([]);
        setOpen(false);
      },
    });
  };

  const removeItem = (index) => {
    confirm('Are you sure?')
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);

    destroy(`/admin/cart-items/remove/${cartItems[index].id}`);
  };

  return (
    <div className="p-6  bg-orange-500">
      <div className="flex items-center justify-between">
        <Link className="text-white font-bold text-2xl" href="/">
          SuLoveSewa
        </Link>
        <div className="hidden md:block relative">
          <FaSearch
            size={20}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300"
          />
          <input
            type="search"
            className="w-[300px] md:w-[400px] focus:outline-none p-2 pl-10 text-sm dark:text-gray-900 rounded-lg"
            name="search"
            placeholder="Search Products..."
          />
        </div>
        <div className="flex items-center">
          <button className="pt-2" onClick={showDrawer}>
            <Badge count={cartItems?.length}>
              <FaCartArrowDown size={30} className="text-white" />
            </Badge>
          </button>

          {auth.user ? (
            <div className="flex items-center gap-3">
              <Link
                href={route("orders")}
                className="text-violet-600 font-medium ml-3"
              >
                Orders
              </Link>

              <Link
                as="button"
                href={route("logout")}
                className="text-green-600 mr-3"
                method="post"
              >
                <FaPowerOff size={20} />
              </Link>
            </div>

          ) : (
            <a href="/login/google">
              <button className="font-medium bg-white text-sm text-orange-500 py-2 px-10 border rounded-md mx-5 ">
                Login
              </button>
            </a>
          )}

        </div>
      </div>
      <div className="block md:hidden relative mt-2">
        <FaSearch
          size={20}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300"
        />
        <input
          type="search"
          className="w-full focus:outline-none p-2 pl-10 text-sm dark:text-gray-900 rounded-lg"
          name="search"
          placeholder="Search Products..."
        />
      </div>
      <Drawer
        title="My Cart"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        width={600}
        footer={
          <Button
            type="primary"
            className="place-content-start"
            onClick={proceedOrder}
          >
            Place Order
          </Button>
        }
      >
        <Divider />

        {cartItems?.map((cartItem, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td>
                  <img className="w-20 h-20" src={app.storage_url + "/" + cartItem.product.image} />
                </td>
                <td>{cartItem.product.name}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.price * cartItem.quantity}</td>
                <td>
                  <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={() => subtractQuantity(index)}>-</div>
                    <div className="h-8 w-8  text-base flex items-center justify-center">{cartItem.quantity}</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={() => addQuantity(index)}>+</div>
                  </div>
                </td>
                <td><DangerButton className="btn-xs" onClick={() => removeItem(index)}>Remove</DangerButton></td>
              </tr>
            </tbody>
          </table>
        ))}
      </Drawer>
    </div>
  );
};

export default Navbar;
