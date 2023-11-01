import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function PricingForm() {
  const { id } = useParams();
  const [Villa, setVilla] = useState({});
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    axios
      .get(`/alpha-homes/property/getPropertyDetailsById/${id}`)
      .then((response) => {
        setVilla(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  function submit(values, actions) {
    axios
      .post(`/alpha-homes/booking/createBooking`, {
        email: values.email,
        propertyId: Villa.propertyId,
        checkInDate: values.checkInDate,
        checkOutDate: values.checkOutDate,
        guestNo: parseInt(values.guestNo),
        totalPrice: Villa.price,
      })
      .then((response) => {
        console.log(response.data);
        toast.success(response.data, { position: 'top-center', theme: 'colored' });
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error occurred, try again later.', {
          position: 'top-center',
          theme: 'colored',
        });
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('*'),
    checkInDate: Yup.date().required('*'),
    checkOutDate: Yup.date().required('*'),
    guestNo: Yup.number()
      .typeError('*')
      .positive('Number of Guests must be a positive number')
      .required('*'),
    termsAndConditions: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions'),
  });

  return (
    <div className="productDetail-card col-lg-4 col-md-5 margin-top-25">
      {/* Display Villa information here */}
      <i className="fa fa-inr" aria-hidden="true"></i>
      <span className="property-discount payable_amt" style={{ fontWeight: 'bolder', fontSize: '18px' }}>
        {Villa.price}.00/-
      </span>
      <span style={{ fontSize: '12px' }}>&nbsp; &nbsp;(Inclusive of all charges)</span>
      <hr className="m-t-sm m-b-lg" />

      <Formik
        initialValues={{
          email: '',
          checkInDate: '',
          checkOutDate: '',
          guestNo: '',
          termsAndConditions: false,
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ isSubmitting,errors}) => (
          <Form>
            <div className="with-forms margin-top-0">
              <div className="row with-forms">
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker6">
                      <label htmlFor="checkInDate" className="col-md-4 col-form-label">
                        Check-In:{errors.checkInDate && <span className="text-danger">*</span>}
                      </label>
                      <Field type="date" name="checkInDate" className="form-control"  min={currentDate}/>
              
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <label htmlFor="checkOutDate" className="col-md-4 col-form-label">
                        Check-Out:{errors.checkInDate && <span className="text-danger">*</span>}
                      </label>
                      <Field type="date" name="checkOutDate" className="form-control" min={currentDate} />
       
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <label htmlFor="guestNo" className="col-md-4 col-form-label">
                        No. of Guest:{errors.checkInDate && <span className="text-danger">*</span>}
                      </label>
                      <Field type="number" name="guestNo" className="form-control" />
           
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <label htmlFor="email" className="col-md-4 col-form-label">
                        Email:{errors.checkInDate && <span className="text-danger">*</span>}
                      </label>
                      <Field type="email" name="email" className="form-control" />
                 
                    </div>
                  </div>
                </div>
              </div>
              <div className="row with-forms m-t-xl mb-3">
                <div className="col-lg-12 col-md-12 form-group">
                  <div className="checkboxes">
                    <Field type="checkbox" name="termsAndConditions" className="form-check-input" />
                    <label style={{ marginLeft: '10px' }}>
                      I agree to Farmhouse Terms &amp; Conditions
                    </label>
                  </div>
                  <ErrorMessage name="termsAndConditions" component="div" className="error" />
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 col-4 mx-auto btn-group btn-group-sm">
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={isSubmitting}
              >
                Book now
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

