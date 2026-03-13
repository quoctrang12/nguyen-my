import React, { useState } from 'react';
import { motion } from 'motion/react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: null, // No auth needed for this public form
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    guests: '1',
    wishes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'rsvps'), {
        name: formData.name,
        attendance: formData.attendance,
        guests: formData.attendance === 'yes' ? formData.guests : undefined,
        wishes: formData.wishes || undefined,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ name: '', attendance: 'yes', guests: '1', wishes: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'rsvps');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding rsvp-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <motion.div 
              className="card border-0 shadow-lg rounded-4 p-4 p-md-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title mb-4">Xác Nhận Tham Dự</h2>
              
              {submitted ? (
                <div className="text-center py-5">
                  <h3 className="cursive mb-3">Cảm ơn bạn!</h3>
                  <p className="lead">Chúng tôi đã nhận được phản hồi của bạn. Hẹn gặp bạn tại lễ cưới nhé!</p>
                  <button 
                    className="btn btn-outline-secondary mt-3 rounded-pill"
                    onClick={() => setSubmitted(false)}
                  >
                    Gửi phản hồi khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Tên của bạn *</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      maxLength={100}
                      placeholder="Nhập tên của bạn"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold d-block">Bạn sẽ tham dự chứ? *</label>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="attendance" 
                        id="attendYes" 
                        value="yes"
                        checked={formData.attendance === 'yes'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="attendYes">Chắc chắn rồi!</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="attendance" 
                        id="attendNo" 
                        value="no"
                        checked={formData.attendance === 'no'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="attendNo">Rất tiếc, tôi không thể đến</label>
                    </div>
                  </div>

                  {formData.attendance === 'yes' && (
                    <div className="mb-3">
                      <label htmlFor="guests" className="form-label fw-bold">Số lượng người tham dự *</label>
                      <select 
                        className="form-select form-select-lg" 
                        id="guests" 
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="1">1 người</option>
                        <option value="2">2 người</option>
                        <option value="3">3 người</option>
                        <option value="4">4 người</option>
                        <option value="5+">5+ người</option>
                      </select>
                    </div>
                  )}

                  <div className="mb-4">
                    <label htmlFor="wishes" className="form-label fw-bold">Lời chúc gửi đến cô dâu chú rể</label>
                    <textarea 
                      className="form-control" 
                      id="wishes" 
                      name="wishes"
                      rows={4}
                      value={formData.wishes}
                      onChange={handleChange}
                      maxLength={1000}
                      placeholder="Viết lời chúc của bạn ở đây..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                      {loading ? 'Đang gửi...' : 'Gửi Xác Nhận'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
