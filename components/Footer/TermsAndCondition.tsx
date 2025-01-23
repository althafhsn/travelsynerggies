import React, { useState } from 'react';

interface TermSection {
    title: string;
    content: string | string[];
    type: 'paragraph' | 'list';
}

const TermsAndConditions: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>('Introduction');

    const termsSections: TermSection[] = [
        {
            title: 'Introduction',
            content: ['At Travel Synergies, we are committed to providing our customers with the best possible travel experiences in the UAE. To ensure that we can deliver on this promise, we have established the following terms and conditions, which are designed to protect both our customers and our company.',
                ''
            ],
            type: 'paragraph'
        },
        {
            title: 'Booking and Payment Terms',
            content: [
                'Bookings can only be made through our official website or authorized agents.',
                'A deposit or specified amount is required to secure a booking. The remaining balance must be paid as per the timeline provided at the time of booking.',
                'Payment can be made by credit card, bank transfer, or any other approved methods.',
                'Travel Synergies reserves the right to cancel any booking if payment deadlines are not met.'
            ],
            type: 'list'
        },
        {
            title: 'Cancellation Policy',
            content: [
                'For cancellations made before the specified cancellation date, a full refund will be provided, minus bank and any other ancillary charges (if any)',
                'Cancellations made after the specified policy date are eligible for a partial refund based on the provided cancellation deadlines and terms.',
                'No refund will be issued for cancellations within the full cancellation period.'
            ],
            type: 'list'
        },
        {
            title: 'Liability and Indemnity',
            content: [
                'Travel Synergies is not liable for any damages or losses caused by circumstances beyond our control, including but not limited to natural disasters, war, and civil unrest.',
                'Customers are required to indemnify Travel Synergies against any claims or damages arising from their own actions or omissions.'
            ],
            type: 'list'
        },
        {
            title: 'Insurance',
            content: [
                'Travel Synergies recommends purchasing a travel insurance to cover unexpected events such as cancellations, medical emergencies or delays.',
                'Travel Synergies is not responsible for providing insurance coverage to customers.'
            ],
            type: 'list'
        },
        {
            title: 'Data Protection',
            content: [
                'Travel Synergies is committed to safeguarding your personal data.',
                'Customers are required to provide accurate and complete information when making a booking and notify us promptly of any changes to their personal details.'
            ],
            type: 'list'
        },
        {
            title: 'Governing Law',
            content: [
                'These terms and conditions are governed by the laws of the United Arab Emirates.',
                'Any disputes arising from these terms and conditions will be resolved through arbitration in accordance with the rules of the Dubai International Arbitration Centre.'
            ],
            type: 'list'
        },
        {
            title: 'Acceptance',
            content: ['By making a booking with Travel Synergies, customers acknowledge that they have read, understood and accepted these terms and conditions.',],
            type: 'paragraph'
        }
    ];

    const renderSectionContent = (section: TermSection) => {
        if (section.type === 'paragraph') {
            return <p className="text-gray-600 leading-relaxed">{section.content as string}</p>;
        }

        return (
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600">
                {(section.content as string[]).map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="ext-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-6 text-center">
                        Terms and Conditions
                    </h1>


                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full md:w-1/5 space-y-2">
                            {termsSections.map((section, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSection(section.title)}
                                    className={`w-full text-left px-2 py-2 rounded transition-colors duration-300 text-sm ${activeSection === section.title
                                        ? 'bg-orange-500 text-white'
                                        : 'hover:bg-orange-100 text-gray-700'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="w-full md:w-3/4 flex items-center justify-center">
                            {activeSection ? (
                                <div className="flex items-center justify-center w-full">
                                    {termsSections
                                        .filter(section => section.title === activeSection)
                                        .map((section, index) => (
                                            <div
                                                key={index}
                                                className="space-y-4 flex flex-col items-start justify-center w-full"
                                            >
                                                <h2 className="text-lg font-semibold text-orange-500 border-b pb-2 w-full">
                                                    {section.title}
                                                </h2>
                                                <div className="mt-4 text-sm text-left w-full">
                                                    {renderSectionContent(section)}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-10">
                                    <p>Select a section to view details</p>
                                </div>
                            )}
                        </div>
                        {/* <div className="w-full md:w-3/4 flex flex-col items-center justify-between h-full">
                            {activeSection ? (
                                <div className="flex flex-col w-full h-full">
                                    {termsSections
                                        .filter(section => section.title === activeSection)
                                        .map((section, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col h-full w-full"
                                            >
                                                <h2 className="text-lg font-semibold text-orange-600 border-b pb-2 text-left w-full">
                                                    {section.title}
                                                </h2>

                                                <div className="flex flex-grow items-center justify-center mt-4 text-sm text-left">
                                                    <div className="w-full">{renderSectionContent(section)}</div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-10">
                                    <p>Select a section to view details</p>
                                </div>
                            )}
                        </div> */}



                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;