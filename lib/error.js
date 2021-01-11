'use strict'

class CodedError extends Error {
    constructor (message = '未知錯誤', code = -1) {
        super(message);
        this.code = code;
    }
}

module.exports = {
    /**
     * 帶有錯誤代碼的錯誤類
     */
    CodedError,
    /**
     * 拒絕訪問 (1)
     */
    ForbiddenError: class ForbiddenError extends CodedError {
        constructor (message = '拒絕訪問') {
            super(message, 1);
        }
    },
    /**
     * 無效的 Query (2)
     */
    InvalidQueryError: class InvalidQueryError extends CodedError {
        constructor (message = '無效的 Query') {
            super(message, 2);
        }
    }
};

