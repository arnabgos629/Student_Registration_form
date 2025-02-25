import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BookOpen } from 'lucide-react';

interface FormValues {
  name: string;
  age: number;
  email: string;
  course: string;
}

const initialValues: FormValues = {
  name: '',
  age: 18,
  email: '',
  course: ''
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  age: Yup.number()
    .min(16, 'Must be at least 16 years old')
    .max(99, 'Age must be less than 100')
    .required('Age is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  course: Yup.string()
    .required('Course selection is required')
});

const courses = [
  'Computer Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Literature'
];

function App() {
  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-8 py-6">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-2 text-2xl font-bold text-gray-900">Student Registration</h2>
          </div>
          
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                  <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <Field
                    type="number"
                    name="age"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="age" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="john@example.com"
                  />
                  <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                    Course
                  </label>
                  <Field
                    as="select"
                    name="course"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="course" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;