import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/carSlice";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const [open, setOpen] = useState(false);
  const viewMenuButtonClicked = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  return (
    <>
      <ViewMenu open={open} setOpen={setOpen}></ViewMenu>
      <Container className="fixed flex items-center justify-between px-10 pt-4 z-1 min-h-60">
        <a href="/">
          <img className="h-4 w-36" src="/images/logo.svg" alt="" />
        </a>
        <Menu className="flex items-center justify-center flex-1 font-semibold">
          {cars &&
            cars.map((car, index) => (
              <a className="flex px-4 text-lg rounded-lg cursor-pointer flex-nowrap hover:bg-slate-400" href="/" key={index}>
                {car}
              </a>
            ))}
        </Menu>
        <div className="flex items-center gap-6 mr-10 font-semibold uppercase">
          <a className="invisible md:visible" href="/">Shop</a>
          <a className="invisible md:visible" href="/">Account</a>
          <button
            onClick={viewMenuButtonClicked}
            className="text-lg font-bold text-black h w-30"
          >
            Menu
          </button>
        </div>
        <BurgerNav show={burgerStatus}>
          <CustomClose
            onClick={() => {
              setBurgerStatus(false);
            }}
          />
          {cars &&
            cars.map((car, index) => (
              <li key={index}>
                <a href="/" key={index}>
                  {car}
                </a>
              </li>
            ))}
          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Cybertruck</a>
          </li>
          <li>
            <a href="/">Roadster</a>
          </li>
        </BurgerNav>
      </Container>
    </>
  );
}

function ViewMenu({ open, setOpen}) {
  const closeMenuButtonClicked = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-sm pointer-events-auto">
                  <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={closeMenuButtonClicked}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-16">
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Existing Inventory</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Used Inventory</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Trade-In</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Test Drive</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Insurance</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Cybertruck</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Roadster</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Semi</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Charging</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Powerwall</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">commercial Energy</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Utilities</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Find Used</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Support</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">Investor Relations</p>
                        <p className="py-2 text-lg font-semibold rounded-lg cursor-pointer hover:bg-slate-100">United States</p>
                        <p>english</p>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0; 
`;

const Menu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  z-index: 10;
`;

const CustomClose = styled(CloseIcon)`
  align-self: end;
  cursor: pointer;
  margin-right: 10px;
`;
