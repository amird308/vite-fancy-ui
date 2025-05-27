import { Button, ModalClose, ModalFooter, 
    ModalHeader, ModalTitle, ModalTrigger, 
    ModalContent, DatePicker } from "@amird3088/fancy-ui";


import { Modal } from "@amird3088/fancy-ui";
import { useState } from "react";


export default function DatePickerModal() {
    const [selectedDate, setSelectedDate] = useState<Date>();

    const formatSelectedDate = (date: Date) => {
        return {
            full: date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }),
            short: date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })
        };
    };

    return (
      <div className="p-8 max-w-md mx-auto">
        <Modal>
          <ModalTrigger asChild>
            <Button className="w-full">
              {selectedDate ? `Selected: ${formatSelectedDate(selectedDate).short}` : 'Pick a date!'}
            </Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Select a Date</ModalTitle>
            </ModalHeader>
            <div className="py-4">
              <DatePicker
                selected={selectedDate}
                onSelect={setSelectedDate}
                placeholder="Choose a date..."
              />
            </div>
            <ModalFooter>
              <ModalClose asChild>
                <Button variant="outline">Cancel</Button>
              </ModalClose>
              <ModalClose asChild>
                <Button disabled={!selectedDate}>
                  {selectedDate ? 'Confirm Selection' : 'Select a Date'}
                </Button>
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
        {selectedDate && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">Selected Date</h3>
                <p className="text-lg font-semibold text-gray-900">
                  {formatSelectedDate(selectedDate).full}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
                  <span className="text-xl font-bold text-blue-600">
                    {selectedDate.getDate()}
                  </span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {selectedDate.toLocaleDateString('en-US', { month: 'short' })}
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
              </span>
              <button 
                onClick={() => setSelectedDate(undefined)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {!selectedDate && (
          <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
            <div className="text-gray-400 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">No date selected</p>
            <p className="text-xs text-gray-400 mt-1">Click the button above to choose a date</p>
          </div>
        )}
      </div>
    );
}

