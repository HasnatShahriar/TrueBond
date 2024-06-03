import PropTypes from 'prop-types'
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from '@headlessui/react'
import { Fragment } from 'react'

const PremiumRequestModal = ({ closeModal, isOpen, modalHandler }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-lg transform overflow-hidden rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 text-left align-middle shadow-2xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-2xl font-bold text-center leading-6 text-white'
                >
                  Upgrade to Premium!
                </DialogTitle>
                <div className='mt-4'>
                  <p className='text-md text-center text-white'>
                    Are you sure you want to make your biodata premium?
                  </p>
                </div>
                <hr className='mt-8 border-white' />
                <div className='flex mt-6 justify-around'>
                  <button
                  onClick={modalHandler}
                    type='button'
                    className='inline-flex justify-center rounded-full bg-green-500 px-6 py-2 text-md font-semibold text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 shadow-lg'
                  >
                    Yes
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-full bg-red-500 px-6 py-2 text-md font-semibold text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 shadow-lg'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

PremiumRequestModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default PremiumRequestModal
