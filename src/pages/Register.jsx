import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from "../firebase_config";
import { LoginContext } from "../contexts/LoginContext";
import { showToast } from "../helpers/showToast";
import { Navigate } from "react-router";

export default function Register() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [psw, setPsw] = useState("");
  const [psw2, setPsw2] = useState("");

  const { state, login_register } = useContext(LoginContext);

  const handleEmailChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setEmail(e.target.value.trim());
    }
  };

  const handleEmail2Change = (e) => {
    if (e.target.value.trim().length > 0) {
      setEmail2(e.target.value.trim());
    }
  };

  const handlePswChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setPsw(e.target.value.trim());
    }
  };

  const handlePsw2Change = (e) => {
    if (e.target.value.trim().length > 0) {
      setPsw2(e.target.value.trim());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === email2 && psw === psw2) {
        const newUser = await createUserWithEmailAndPassword(auth, email, psw);
        login_register({
          isLogged: true,
          userEmail: newUser.user.email,
        });
        showToast("succesfully", `Hello dear ${newUser.user.email}`);
        setOpen(false);
      } else {
        throw new Error("There was an error in emails or password shields");
      }
    } catch (error) {
      showToast(
        "error",
        error.message === "There was an error in emails or password shields"
          ? "There was an error in emails or passwaord shields"
          : `There was an error`
      );
      console.error(error);
    }
  };

  if (state.isLogged) {
    return <Navigate to='/' />
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mb-3">
                <h2 className="text-4xl font-black font-semibold text-center">
                  Hello dear user
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-3 ml-3 w-full flex gap-4">
                  <label
                    htmlFor="E-mail"
                    className="flex-none w-24 font-semibold"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="border-b flex-1 mr-3"
                    name="E-mail"
                    required
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="mt-3 ml-3 w-full flex gap-4">
                  <label htmlFor="Psw" className="flex-none w-24 font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-b flex-1 mr-3"
                    name="Psw"
                    required
                    onChange={handlePswChange}
                  />
                </div>
                <h3 className="text-center text-2xl mt-4">
                  Please confirm the information
                </h3>

                <div className="mt-3 ml-3 w-full flex gap-4">
                  <label
                    htmlFor="E-mail"
                    className="flex-none w-24 font-semibold"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="border-b flex-1 mr-3"
                    name="E-mail"
                    required
                    onChange={handleEmail2Change}
                  />
                </div>

                <div className="mt-3 ml-3 w-full flex gap-4">
                  <label htmlFor="Psw" className="flex-none w-24 font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-b flex-1 mr-3"
                    name="Psw"
                    required
                    onChange={handlePsw2Change}
                  />
                </div>
                <div className="bg-gray-50 px-4 py-3 mt-2 sm:px-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-950 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
