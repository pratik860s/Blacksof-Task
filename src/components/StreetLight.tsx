import React from 'react';
import Streetlight from "../assets/street_light_controler.png"

const StreetLight: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                How does a smart street light ecosystem work?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                        {Streetlight}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700">Street Light Controller</h3>
                        <p className="text-gray-600">
                            Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                        {/* Add the icon or SVG here */}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700">Gateway</h3>
                        <p className="text-gray-600">
                            Employed for interfacing between a Controller and the Lighting Management Software.
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                        {/* Add the icon or SVG here */}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700">Cloud-based Management System</h3>
                        <p className="text-gray-600">
                            Collects information from multiple gateways.
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                        {/* Add the icon or SVG here */}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700">Users</h3>
                        <p className="text-gray-600">
                            Data from the cloud is used to monitor and control street lights by the System Managers.
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                        {/* Add the icon or SVG here */}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700">Evaluation</h3>
                        <p className="text-gray-600">
                            Gathered insights are used to evaluate the performance of the lighting systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreetLight;
